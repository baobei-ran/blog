# javascript 常见问题整理 

[原文地址](https://mp.weixin.qq.com/s/gqfiB13e3dLk1026zEa4kw)

### 1. 获取一个月有多少天


今天遇到一个需求，已知月份，得到这个月的第一天和最后一天作为查询条件查范围内的数据

```new Date(year, month, date, hrs, min, sec)，new Date``` 可以接受这些参数创建一个时间对象 其中当我们把 date 设置为 0 的时候，可以直接通过 ```getDate()``` 获取到最后一天的日期然后得到我们要的最后一天

```js
new Date(2019, 12, 0).getDate(); // 31
new Date(2018, 2, 0).getDate(); // 28
// 根据这个我们可以得到一个方法
function getMonthLength(month) {
  const date = new Date(month);
  const year = date.getFullYear();
  // 月份是从 0 开始计算的
  const _month = date.getMonth() + 1;
  return new Date(year, _month, 0).getDate();
}

```



### 2. ~ 的用途

我们知道在 JavaScript 中假值有：undefined、null、false、+0、-0、NaN、''，其他都为真值，所以负数也是真值，那么我们就可以拿着 ~ 和 indexOf 一起检结果强制类型转换为 真/假 值

```js
const str = 'hello world';
~str.indexOf('lo'); // -4，真值
if (~str.indexOf('lo')) {
  // true
  // 找到匹配
}
~str.indexOf('ol'); // 0，假值
!~str.indexOf('ol'); // true
if (!~str.indexOf('ol')) {
  // true
  // 没有找到匹配
}

```

~ 要比 >=0 和 == -1 更简洁


## 给定一组 url 实现并发请求

原题是这样的：给定一组 url，利用 js 的异步实现并发请求，并按顺序输出结果


1. 使用 Promise 实现
```js

const urls = ['/1.json', "/2.json", "/3.json"]

function getData (url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.responseType = "json"

        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            resolve(xhr.response)
          }
        }
        xhr.open('GET', url, true)
        xhr.send(null)
      })
    }

    function getMultiData(urls) {
      // Promise.all 接受一个包含 promise 的数组，如果不是 promise 数组会被转成 promise
      Promise.all(urls.map(url => getData(url))).then(results => {
        console.log(results);
      });
    }

    getMultiData(urls)
```


2. 不用 Promise

原题是不用 ```Promise``` 来实现，我们可以写一个方法，加个回调函数，等数据全部回来之后，触发回调函数传入得到的数据，那么数据全部回来的就是我们要考虑的核心问题，我们可以用个数组或者对象，然后判断一下数组的 length 和传入的 url 的长度是否一样来做判断

使用对象做映射

```js
function getAllData (urls, cd) {
  const result = {}
  function getData (url, data, idx) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          result[idx] = xhr.response;
          // 如果两者 length 相等说明都请求完成了
          if (Object.keys(result).length === urls.length) {
            // 给对象添加 length 属性，方便转换数组
            result.length = urls.length;
            cd && cd(Array.from(result));
          }
        }
      }
    }
    
    xhr.open('POST', "http://cm.api.yunyikang.net/api"+url, true);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(JSON.stringify(data));
  } 
  urls.forEach((obj, idx) => getData(obj.url, obj.data, idx));
}

  const urls = [ { url: '/WheatCircleIndex', data: { userId: 1 }}, { url: '/taskList', data: { userId: 1 }}, { url: "/userClockStatus", data: { userId: 1 }}]
  // 使用
  getAllData(urls, data => {
    console.log(data);
  });

```

使用数组实现

和上面的基本思路差不多，不过这次换成了数组，也可以给个信号量来做判断

```js

function getAllData (urls, cd) {
    const results = [];
    let count = 0;
    function getData (url, data, idx) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          results.push(xhr.response)
          if (++count === urls.length) {
            cd && cd(results)
          }
        }
      }
    }
    
    xhr.open('POST', "http://cm.api.yunyikang.net/api"+url, true);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(JSON.stringify(data));
    } 
    urls.forEach((obj, idx) => getData(obj.url, obj.data, idx));
  }

  const urls = [ { url: '/WheatCircleIndex', data: { userId: 1 }}, { url: '/taskList', data: { userId: 1 }}, { url: "/userClockStatus", data: { userId: 1 }}]
  // 使用
  // 发现返回值顺序不固定，谁先返回值就排在最前面
  getAllData(urls, data => {
    console.log(data);
  });
```





## 观察者与发布订阅


一直以来，我以为发布订阅和观察者是一个思路，一次偶然的机会我发现他们是两种不同的设计思路

虽然他们都是``实现了对象的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖它的对象都将得倒通知，然后自动更新``。但是他们之间是有一定区别的。

#### 观察者模式

观察者模式会有 ```观察者``` 与 ```被观察者(观察目标)``` 两个对象存在，观察者可以有多个，观察目标可以添加多个观察者，可以通知观察者。观察者模式是面向与目标和观察者编程的，耦合目标和观察者

```js
// 被观察者

  class Subject {
    constructor () {
      this.subs = []
    }

    add (observer) {
      this.subs.push(observer)
    }
    notify (...args) {
      this.subs.forEach(ob => ob.update(...args))
    }
  }


  // 观察者
  class Observer {
    update (...args) {
      console.log('Observer -> update -> args', args)
    }
  }


  // 使用
  const o1 = new Observer();
  const o2 = new Observer();
  const o3 = new Observer();
  const o5 = new Observer();
  const sub = new Subject();
  // 添加观察者
  sub.add(o1);
  sub.add(o2);
  sub.add(o3);
  sub.add(o5);
  // 通知观察者
  sub.notify('嘿嘿嘿');
```


#### 发布订阅模式

发布订阅模式会有一个调度中心的概念。是面向调度中心编程的，对发布者与订阅者解耦

```js
class PubSub {
  constructor() {
    this.handlers = {};
  }
  subscribe(type, fn) {
    if (!this.handlers[type]) {
      this.handlers[type] = [];
    }
    this.handlers[type].push(fn);
  }
  publish(type, ...args) {
    if (!this.handlers[type]) return;
    this.handlers[type].forEach(fn => fn(...args));
  }
}

const ps = new PubSub();

ps.subscribe('a', console.log);
ps.subscribe('a', console.log);
ps.subscribe('a', console.log);
ps.subscribe('a', console.log);
ps.publish('a', 'hello world');
```

#### 字符串转 txt 文件（blob）

有个要求：纯前端实现，不可以使用 nodejs

实现原理也很简单，就像我们平时下载一个本地文件一样，可以动态的创建一个可以下载的 ```a``` 标签，给它设置 ```download``` 属性，然后把下载的内容转 ```blob``` 创建下载链接下载即可

具体实现如下：

```js
function exportTxt(text, filename) {
  const eleLink = document.createElement('a');
  eleLink.download = filename;
  eleLink.style.display = 'none';
  // 将内容转为 blob
  const blob = new Blob([text]);
  eleLink.href = URL.createObjectURL(blob);
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}
```


#### 奇偶数判断

可能会遇到一个做奇偶数判断的方法吧，反正我遇到了，一句话搞定

```js
const isEven = num => num % 2 === 0;
```

#### 格式化金钱

项目中我们经常会遇到金钱格式化需求，或者说数字格式化一下，方便阅读（数字比较大的情况下）

比如说 999999999，直接阅读很不直观，格式化后 999,999,999

通常我们会使用正则来处理

```js
function formatPrice(price) {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
```

也可以不使用正则然后优雅的处理

```js
function formatPrice(price) {
  return String(price)
    .split('')
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ',') + prev;
    });
}
```

上面是两种提到的比较常用的方案，但是 js 还有个比较牛逼的 API 可以直接实现这个需求哦，它就是 ```toLocaleString```，我们可以直接数字调用这个方法就可以实现，金额的格式化

```js
(999999999).toLocaleString(); // 999,999,999
// 当然还可以更秀一点
const options = {
  style: 'currency',
  currency: 'CNY',
};
(123456).toLocaleString('zh-CN', options); // ¥123,456.00

```
```toLocaleString``` 可以接收两个可选参数：locales 和 options，而且这个 api 在各大浏览器通用不存在兼容问题并且这个 api 不止存在 Number 的原型上，Array、Object、Date 原型上都有这个 api，并且格式化出来的值可以根据我们传入的参数出现各种结果

参数及用法可以参考 MDN


#### 深度冻结对象

在 vue 项目开发中，有些不变的常量，我们不想 vue 为他做双向绑定，以减少一些性能上消耗，我们可以把使用 Object.freeze 将对象冻结，此时 vue 将不会对这个对象进行冻结，但是这个冻结只是冻结对象第一层，所以遇到对象层级比较深的话，我们可以写个深度冻结的 api，来对常量对象做一些冻结优化

```js
const deepFreeze = o => {
  const propNames = Object.getOwnPropertyNames(o);
  propNames.forEach(name => {
    const prop = o[name];
    if (typeof prop === 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(o);
};
```

#### 脱敏处理

在一些涉及到用户隐私情况下，可能会遇到对用户的手机号身份证号之类的信息脱敏，但是这个脱敏数据的规则是根据用户信息要脱敏字段动态的生成的，此时我们动态拼接正则来实现一个动态脱敏规则

```js
const encryptReg = (before = 3, after = 4) => {
  return new RegExp('(\\d{' + before + '})\\d*(\\d{' + after + '})');
};
// 使用：'13456789876'.replace(encryptReg(), '$1****$2') -> "134****9876"



// 第二种 封装下
function hideMsg (str, options) {
  if (!str) return;
  let { before, after, tag = "****" } = options || {};
  before = before || 3;
  after = after || 4;
  tag = tag || "****";
  var reg = new RegExp("^(.{"+before+"})(?:\\d+)(.{"+after+"})$");
  console.log(reg)
  return str.toString().replace(reg,`$1${tag}$2`);
} 

// 使用方便
console.log(hideMsg('132456768768', { tag: '*******'})) 

// 或者直接使用
let phone = '112345676789';
let newPhone = phone.replace(/^(.{3})(?:\d+)(.{4})$/,"$1****$2");
console.log(newPhone); // "112****6789"

```

#### 树遍历

对于树结构的遍历一般有深度优先和广度优先

广度优先和深度优先的概念很简单，区别如下：

- 深度优先，访问完一颗子树再去访问后面的子树，而访问子树的时候，先访问根再访问根的子树，称为先序遍历；先访问子树再访问根，称为后序遍历。
- 广度优先，即访问树结构的第 n+1 层前必须先访问完第 n 层

1. 深度优先

先序遍历

```js
const treeForEach = (tree, func) => {
  tree.forEach(data => {
    func(data);
    data.children && treeForEach(data.children, func);
  });
};
```

后序遍历，只需要调换一下节点遍历和子树遍历的顺序即可

```js
const treeForEach = (tree, func) => {
  tree.forEach(data => {
    data.children && treeForEach(data.children, func);
    func(data);
  });
};
```

2. 广度优先

广度优先的思路是，维护一个队列，队列的初始值为树结构根节点组成的列表，重复执行以下步骤直到队列为空。取出队列中的第一个元素，进行访问相关操作，然后将其后代元素（如果有）全部追加到队列最后。

```js
const treeForEach = (tree, func) => {
  let node,
    list = [...tree];
  while ((node = list.shift())) {
    func(node);
    node.children && list.push(...node.children);
  }
};
```

#### 数组分组

开发移动端的时候，遇到一个首页菜单改版的需求，首页菜单根据权限控制显隐，而菜单每页展示八个小菜单，超过八个做 swipe 滑动切换，当时项目用了 vant 做的 UI 框架，菜单那模块就选择了他的轮播插件，菜单做成了一个扁平化的 list 配置，首先根据权限过滤出所有有权限的菜单项，然后每八个一分组，处理成一个二维数据来遍历菜单

```js
const arrayGroupBySize = (arr, size = 2) => {
  const result = [];
  for (let i = 0, len = arr.length; i < len; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
```

#### 下划线与驼峰

做一些数据持久化的工作的时候经常会出现下划线命名和驼峰命名的转化，因为在前端处理中规范是驼峰命名，而像 mysql 之类的规范是下划线命名，所以在处理后返回给前端的数据需要转换为驼峰命名，而对数据库的读写需要下划线命名

```js
const toHump = name => {
  return name.replace(/\_(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
};

const toLine = name => {
  return name.replace(/([A-Z])/g, '_$1').toLowerCase();
};
```

#### 校验时间格式

业务中遇到一个校验一下传入时间格式是否为一个时间格式，下面的方法可以完美校验

```js
const isDate = str => {
  return typeof str !== 'number' && str !== null && new Date(str) !== 'Invalid Date';
};
```

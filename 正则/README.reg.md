<!--
 * @Author: 清风
 * @Date: 2021-01-22 13:31:12
 * @Description: 
-->

# js正则大全

### 手机号
```js
  const isRegPhone1 = /^1[3456789]\d{9}$/; 

  const isRegPhone2 = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

  const isRegPhone3 = /^1(3|4|5|6|7|8|9)\d{9}$/;

  const isRegPhone4 = /^[1][3,4,5,7,8][0-9]{9}$/;

  // 校验手机号和固定电话
  const isPhoneOrTel = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/; 

  
  // 固定电话号码正则
  const isTel_1 = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;

  let myreg_2 = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;

```


### 身份证
```js

/**
 *  华北： 北京11，天津12，河北13，山西14，内蒙古15
    东北： 辽宁21，吉林22，黑龙江23
    华东： 上海31，江苏32，浙江33，安徽34，福建35，江西36，山东37
    华中： 河南41，湖北42，湖南43
    华南： 广东44，广西45，海南46
    西南： 四川51，贵州52，云南53，西藏54，重庆50
    西北： 陕西61，甘肃62，青海63，宁夏64，新疆65
    特别： 台湾71，香港81，澳门82
 */
// 正则身份证号（18位）
const isRegCard = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;



//身份证正则表达式(15位)
const isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
//身份证正则表达式(18位)
const isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;

// 身份证正则合并：(^\d{15}$)|(^\d{17}([0-9]|X)$)

function isRegCard (card) {
  card = card.toUpperCase();
  const isCardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/; 
  return isCardReg.test(card); 
}


// 15位和18位
const isCard =  /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;


var idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;



var idCard2 = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;


```



### 邮箱
```js

  const isRegEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

  const isRegEmail2 = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

  const isRegEmail3 = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;


  const isEmail = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;


  var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");


  let isEm = /^(\\w+([-.][A-Za-z0-9]+)*){3,18}@\\w+([-.][A-Za-z0-9]+)*\\.\\w+([-.][A-Za-z0-9]+)*$/;

  const emailReg = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})$/;


  // 来源 element 的 MessageBox 中
  let inputPattern = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;



  var mail_1 = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  var mail_2 = /^[a-zA-Z0-9_-]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;

```


### 中文（姓名验证）

```js

  var regIdName = /^(([a-zA-Z+\.?\·?a-zA-Z+]{2,30}$)|([\u4e00-\u9fa5+\·?\u4e00-\u9fa5+]{2,30}$))/;

  const realnameReg = /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/;   // 验证英文或汉字（1-10）

  const isName = /^[\u4E00-\u9FA5]+$/;    // 验证中文


  const isRegName = /^[\p{Unified_Ideograph}]$/u;   // \p的```兼容性```参考链接：https://juejin.cn/post/6927246122402447373 （掘金）  
  
  /*  其中\u是 正则表达式标志，表示正则表达式中的字符串按照 unicode 编码处理，\p则会根据 Unicode 属性进行匹配，后面需要跟着一个 Unicode 属性值，以这种格式\p{Unicode属性格式}，由于 Unicode 属性值太多，这里不一一列举了，感兴趣的可以看这里, 这里我们使用Unified_Ideograph这个属性值，表示各种汉字字符。

  */


```



### 车牌号

```js

  const iscarId = /(^[\u4E00-\u9FA5]{1}[A-Z0-9]{6}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/;
        

```




### 表情（emoji）

```js

var emoji = /^(?:(?![\|\u2600-\u27FF]|[\uD83C\uD83D][\uDC00-\uDFFF])[\s\S])*$/;

```




### 深拷贝
```js

/**
 * 深拷贝
 * @param {*} obj 拷贝对象(object or array)
 * @param {*} cache 缓存数组
 */
export function deepCopy (obj, cache = []) {
  // typeof [] => 'object'
  // typeof {} => 'object'
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  // 如果传入的对象与缓存的相等, 则递归结束, 这样防止循环
  
  const hit = cache.filter(c => c.original === obj)[0]
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ?  [] :   {}
  // 将copy首先放入cache, 因为我们需要在递归deepCopy的时候引用它
  cache.push({
    original: obj,
    copy
  })
  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}



// 方法二： 来源vuex/utils
export function find (list, f) {
    return list.filter(f)[0]
}
export function deepCopy(obj, cache = []) {
    if (obj === null || typeof obj !== "object") return obj;

    const hit = find(cache, f => f.original === obj)
    if (hit) {
        return hit.copy;
    }
    const copy = Array.isArray(obj) ? [] : {};
    cache.push({
        original: obj,
        copy
    })
    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key], cache);
    })
    return copy;
}

```
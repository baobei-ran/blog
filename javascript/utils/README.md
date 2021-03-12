# javascript 常见问题整理

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
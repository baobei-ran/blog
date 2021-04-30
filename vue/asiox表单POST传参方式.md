<!--
 * @Author: 清风浩明月
 * @Date: 2021-04-30 11:18:47
 * @version: 
 * @Description: 
-->

## 1. es5 方式
```js
function querys(obj) {
  if (typeof obj !== 'object') return;
  let str = '';
  let hasOwn = Object.prototype.hasOwnProperty;
  for (let k in obj) {
    if (hasOwn.call(obj, k)) {
      str += encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]) + '&';
    }
  }
  str = str.length ? str.slice(0, str.length - 1) : '';
  return str;
}
```

## 2. es6 方式

```js
const querys = obj => {
    if (typeof obj !== 'object') return;
    let params = Object.values(obj).reduce((a, b, i) => `${a}${Object.keys(obj)[i]}=${b}&`, '');
    return params.length ? params.substring(0, params.length - 1) : '';
};
```
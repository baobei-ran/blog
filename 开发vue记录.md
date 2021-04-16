# cdn 引入路径

## vue

```js
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>


<script async src="https://unpkg.com/vue@2.6.10/dist/vue.min.js"></script> 


```

## vuex

```js
<script src='https://cdn.jsdelivr.net/npm/vuex@3.2.0/dist/vuex.min.js'></script>
```

## 获取当前域名

```js

// var baseURL = document.location.origin;  // 获取 url 的域名
// var baseURL = window.location.protocol+"//"+window.location.host; // 获取域名
// var baseURL = 'http://test99.yunyikang.cn'; // 测试

// 获取域名（兼容 IE）
var url = window.location.protocol+"//"+window.location.host;

```

## 封装 localStorage  

```js

/**
 * 使用 html5 提供的 localStorage来缓存数据
 * 
 * function isIE() { //检测是否ie?
      if (!!window.ActiveXObject || "ActiveXObject" in window) {
        return true;
      } else {
        return false;
      }
    }
 **/
// 本地永久储存封装
// var localStorage = localStorage || window.localStorage;
// export default {
//   get:function (key) {
//     var stringData = localStorage.getItem(key)
//     var val = JSON.parse(decodeURIComponent(stringData))
//     return val
//   },
//   set: function (key, value) {
//     var val = JSON.stringify(value)
//     localStorage.setItem(key, encodeURIComponent(val))
//   },
//   clear: function () {
//     localStorage.clear()
//   },
//   del: function (key) {
//     localStorage.removeItem(key)
//   }
// }

```
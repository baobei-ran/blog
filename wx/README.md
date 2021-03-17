# 微信内置浏览器禁止调整字体大小的方法

1. 微信中 以下代码可使Android机页面不再受用户字体缩放强制改变大小，但是会有1S左右延时，期间可以考虑loading来处理
```js
<script>
(function() {
  if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
      handleFontSize();
  } else {
      if (document.addEventListener) {
          document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
      } else if (document.attachEvent) {
          document.attachEvent("WeixinJSBridgeReady", handleFontSize);
          document.attachEvent("onWeixinJSBridgeReady", handleFontSize);  }
  }
  function handleFontSize() {
      // 设置网页字体为默认大小
      WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
      // 重写设置网页字体大小的事件
      WeixinJSBridge.on('menu:setfont', function() {
          WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
      });
  }
})();
</script>
```

TypeScript 中使用

```ts
// document 不存在 attachEvent 方法，所以继承 Document 进行扩展
interface ExtendedDocument extends Document {
  attachEvent?: any;
}
const doc: ExtendedDocument = document;

// 在 shims-vue.d.ts 文件中加入： declare var WeixinJSBridge: any;

if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
  handleFontSize();
} else {
  if (doc.addEventListener) {
    doc.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
  } else if (doc.attachEvent) {
    doc.attachEvent("WeixinJSBridgeReady", handleFontSize);
    doc.attachEvent("onWeixinJSBridgeReady", handleFontSize);
  }
}
function handleFontSize() {
  WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
  WeixinJSBridge.on('menu:setfont', function() {
    WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
  });
}

```

2. IOS系统禁止微信客户端修改字体大小

```css
/* IOS禁止微信调整字体大小 */
body { 
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
  -moz-text-size-adjust: 100% !important;
}
```

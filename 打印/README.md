# 使用 jqprintjs 把html打印出来

1. 引入 jq 和  jqprint

```html

    <script src="js/jquery-1.4.4.min.js"></script>
    <script src="js/jqprint.min.js"></script>

```

2. 使用方式
```js

$("#printContainer").jqprint({
     debug: false, //如果是true则可以显示iframe查看效果（iframe默认高和宽都很小，可以再源码中调大），默认是false
     importCSS: true, //true表示引进原来的页面的css，默认是true。（如果是true，先会找$("link[media=print]")，若没有会去找$("link")中的css文件）
     printContainer: true, //表示如果原来选择的对象必须被纳入打印（注意：设置为false可能会打破你的CSS规则）。
     operaSupport: true//表示如果插件也必须支持歌opera浏览器，在这种情况下，它提供了建立一个临时的打印选项卡。默认是true
});

```

3. 动态改变 字体大小

```js
initSetStyle (fs) {
    if ($("style[media=print]").length > 0) {
        try {
            $("style[media=print]")[0].innerText = reportStyle(fs);
        } catch (e) {
            $("style[media=print]")[0].styleSheet.cssText = reportStyle(fs);
        }
    } else {
        var style = document.createElement("style");
        style.type = "text/css";
        style.media = 'print'
        try{
        　　style.appendChild(document.createTextNode(reportStyle(fs)));
        }catch(ex){
        　　style.styleSheet.cssText = reportStyle(fs);
        }
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(style);
    }
}


const reportStyle = function (fs) {
    return `
      @media print { .header, .footer, header, footer { display: none;} body {  width: 100%; margin:0mm auto; } @page { size: auto; margin: 0; font-size: ${fs}px; } }
      html { font-size: ${fs}px; margin: 0; } 
      body { font-family: 'Avenir', Helvetica, Arial, sans-serif, '黑体', '微软雅黑';  font-size: 15px; margin: 2mm auto;zoom:1;}
      p {  margin: 0;  } ul {  margin: 0; padding: 0; } li { list-style: none; }
      * { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box; }
      
  `}
```

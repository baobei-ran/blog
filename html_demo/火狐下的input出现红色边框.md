<!--
 * @Author: 清风
 * @Date: 2020-09-23 15:23:54
 * @Description: 
-->

## firefox下的input出现红色边框    （参考：https://blog.csdn.net/chilin1017/article/details/100645356 ）


```js
	研究了下 然后发现下面关键代码：

	<input type="number" min="1" max="0">

	若将max改1再输入1就没有红框（不填也是没有的），

	所以原因应该就是输入的值超过了输入框的限定范围了，（本来就没有>=1&&<=0的数字嘛！）

	于是firefox给这种情况下加了红框的属性。


```

- 解决方式
```css 
  
  A，不要写出 min="1" max="0" 这种属性

	B，根据查到的各位前辈的分享，添加以下css可以去除红色边框（然鹅开发者工具查看并没有找到相关属性）

	input{ box-shadow: none; }

	当然box-shadow 用其它值覆盖也是可以的。

```
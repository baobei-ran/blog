# IE兼容 --- find

```js

//判断是否有find方法
if(!Array.prototype.find){
  Array.prototype.find = function(callback) {
      return callback && (this.filter(callback) || [])[0];
  };
}
```
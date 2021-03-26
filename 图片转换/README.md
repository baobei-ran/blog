<!--
 * @Description: 
 * @Author: 清风浩明月
 * @Date: 2021-03-26 10:01:30
 * @version: 
-->

# 


### 1. 将base64转换为file类型

```js

  // 将base64转换为file类型
  function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {type:mime});
  }

```


### 2. 可以将图片转换为base64

```js
  function getImgToBase64(url,callback) {
    var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d'),
      img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img,0,0);
      var dataURL = canvas.toDataURL('image/png');
      callback(dataURL);
      canvas = null;
    };
    img.src = url;
  }

getImgToBase64('img/test.png',function(base64data) {
    console.log(base64data)
    // 转 File
　　var myFile = dataURLtoFile(base64data,'文件名称.test.png');
　　console.log(myFile);
});
```


### 3. base64转换为 Blob

```js
// 将base64转换为 Blob
  function dataURLtoBlob (dataurl, name) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return blobToFile(new Blob([u8arr], { type: mime }), name);   // Blob 兼容性好
  }
  //将blob转换为file
  function blobToFile (theBlob, fileName) {
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
  }
```
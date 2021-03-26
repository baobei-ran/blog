/*
 * @Description: 
 * @Author: 清风浩明月
 * @Date: 2021-03-26 13:36:58
 * @version: 
 */

class ToFiles {
  defaultOptins = {
    maxWidth: 500,
    maxHeight: 500,
    quality: 0.92
  }
  constructor (file, options) {
    this.file = file;
    this.defaultOptins = Object.assign({}, this.defaultOptins, options)
  }

  /** 将base64转换为 File

    ataurl  base64
    name   文件名称
  */
  dataURLtoFile (dataurl, name) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], name, { type: mime })                  // File IE不兼容
  }
  // 将base64转换为 Blob
  dataURLtoBlob (dataurl, name) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return this.blobToFile(new Blob([u8arr], { type: mime }), name);   // Blob 兼容性好
  }
  //将blob转换为file
  blobToFile (theBlob, fileName) {
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
  }

  /**
  File 转换 base64 

    file        File文件
    callback    function 回调函数
  */
  fileToBase64 (file, fileName, callback) {
    let name = fileName || file.name;
    var fr = new FileReader();
    fr.onloadend = function(e) {
      let base64 = e.target.result;
      callback && callback(base64, name)
    };
    fr.readAsDataURL(file);
  }

  /**

  */
  imagetoCanvas(image) {
    var cvs = document.createElement("canvas");
    var ctx = cvs.getContext('2d');
    var maxWidth = this.defaultOptins.maxWidth, maxHeight = this.defaultOptins.maxHeight;
    var originWidth = image.width
    var originHeight = image.height
    var targetWidth = originWidth,
        targetHeight = originHeight;
    // 图片尺寸超过最大尺寸限制
    if(originWidth > maxWidth || originHeight > maxHeight) {
      if (originWidth / originHeight > maxWidth / maxHeight) {
        // 更改宽度，按照宽度限定尺寸
        targetWidth = maxWidth
        targetHeight = Math.round(maxWidth*(originHeight/originWidth))
      } else {
        targetHeight = maxHeight
        targetWidth = Math.round(maxHeight*(originWidth/originHeight))
      }
    }
    cvs.width = targetWidth;
    cvs.height = targetHeight;
    ctx.drawImage(image, 0, 0, cvs.width, cvs.height);
    var newUrl = cvs.toDataURL('image/jpeg', this.defaultOptins.quality)
    return newUrl;
  }

 urltoImage (url, cb, fail) {
    const img = new Image();
    img.onload = () => {
      cb(img)
    }
    img.onerror = () => {
      fail('urltoImage(): Image failed to load, please check the image URL');
    };
    img.src = url;
  }
  fileToFile(file, fileName, cb, fail) {
    if (!this.isFile(file, 'File')) {
      throw new Error("文件格式错误，需要的是 File 文件！！！");
    }
    let self = this;
    this.fileToBase64(file, fileName, function (base64data, name) {
      self.urltoImage(base64data, (img) => {
        let newFile = self.dataURLtoFile(self.imagetoCanvas(img), name);
        let f = newFile.size > file.size ? file : newFile;
        cb && cb(f);
      }, (err) => {
        fail && fail(err);
      })
    })
  }
  // 工具效验
  isFile (file, type) {
    return Object.prototype.toString.call(file).slice(8, -1) === type
  }
}
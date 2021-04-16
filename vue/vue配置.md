# vue


## 获取本机 ip 地址

```js

function getIPAdress() {  
  var interfaces = require('os').networkInterfaces();
  for(var devName in interfaces){
    var iface = interfaces[devName];
    for(var i=0;i<iface.length;i++){
      var alias = iface[i];
      if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
        return alias.address;
      }
    }
  }
}

// 使用
module.exports = {
  devServer: {
    open: true,
    host: getIPAdress()
    port: 9999,
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://cm.api.yunyikang.net",
        changOrigin: true,
        pathRewrite: {  // 重写 api 为空
          "^/api": ""
        }
      },
    },
  },
}

```
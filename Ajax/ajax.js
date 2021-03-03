/*
 * @Author: 清风
 * @Date: 2021-03-03 14:16:00
 * @Description: 
 */

 // 封装 ajax 
function ajax(options) {  
   // 创建 XMLHttpRequest 对象
  let xhr = new XMLHttpRequest();

  // 初始化参数的内容
  options = options || {};
  options.type = (options.type || "GET").toUpperCase();
  options.dataType = options.dataType || 'json';
  let params;

  // 发送请求
  if (options.type === 'GET') {
    params = querys(options.data);
    xhr.open('GET', options.url + '?' + params, true);
    xhr.send(null);
  } else if (options === 'POST') {
    params = options.data;
    xhr.open("POST", options.url, true);
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded") // 表单格式发送
    xhr.send(params)
  }
  // 接收请求
  xhr.onreadystatechange = function () { 
    if (xhr.readyState === 4) {
      let status = xhr.status
      if (status >= 200 && status < 300) {
        options.success && options.success(xhr.responseText, xhr.responseXML)
      } else {
        options.fail && options.fail(status);
      }
    }
  }
}




/**
 * 
 * @param { Object } obj 
 */
let querys = obj => {
  if (typeof obj !== 'object') return;
  let params = Object.values(obj).reduce((a, b, i) => `${a}${Object.keys(obj)[i]}=${b}&`, '');
  return params.length ? params.substring(0, params.length - 1) : '';
};


// var baseURL='http://test99.yunyikang.cn';//测试
// var baseURL='https://www.yunyikang.cn';//正式
var baseURL='http://192.168.8.106';// ip地址
function ajax_method(url, data, success, failed,type){
    // 创建ajax对象
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();     // 所有现代浏览器 (IE7+、Firefox、Chrome、Safari 以及 Opera) 都内建了 XMLHttpRequest 对象
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')  // 老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象
    }
    if(url.indexOf('http')==-1){
        url=baseURL+url
    }else if(url.indexOf('192')!=-1){
        url=baseURL+url.substring(url.indexOf(window.location.port)+4,url.length)
    }
    var type = type.toUpperCase();
    // 用于清除缓存
    var random = Math.random();
 
    if(typeof data == 'object'){
        var str = '';
        for(var key in data){
            str += key+'='+data[key]+'&';
        }
        data = str.replace(/&$/, ''); // 去掉尾部为 “&” 的字符
    }
    
    if(type == 'GET'){
        if(data){
            xhr.open('GET', url + '?' + data, true);
        } else {
            xhr.open('GET', url + '?t=' + random, true);
        }
        xhr.send();
 
    } else if(type == 'POST'){
        xhr.open('POST', url, true);
        // 如果需要像 html 表单那样 POST 数据，请使用 setRequestHeader() 来添加 http 头。
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }
    
    // 处理返回数据
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                success(xhr.responseText);
            } else {
                if(failed){
                    failed(xhr.status);
                }
            }
        }
    }
}
 

/**
 * iframe 下载 
 *  缺点： 不支持跨域下载
 * @param {*} url 路径
 */
export function downloadFile_old(url) {
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  function iframeLoad() {
    console.log("iframe onload");
    const win = iframe.contentWindow;
    const doc = win.document;
    if (win.location.href === url) {
      console.log("iframe remove");
      if (doc.body.childNodes.length > 0) {
        // response is error
      }
      iframe.parentNode.removeChild(iframe);
    }
  }
  if ("onload" in iframe) {
    iframe.onload = iframeLoad;
  } else if (iframe.attachEvent) {
    iframe.attachEvent("onload", iframeLoad);
  } else {
    iframe.onreadystatechange = function onreadystatechange() {
      if (iframe.readyState === "complete") {
        iframeLoad;
      }
    };
  }
  iframe.src = "";
  document.body.appendChild(iframe);
  setTimeout(function loadUrl() {
    iframe.contentWindow.location.href = url;
  }, 50);
}


 /**
 *下载导出文件
 * @param blob  ：返回数据的blob对象或链接
 * @param tagFileName  ：下载后文件名标记
 * @param fileType  ：文件类 word(docx) excel(xlsx) ppt、pdf等
 */

export function downloadFile(blob, tagFileName) {
  // blob 文件流转换好的 blob (let blob = new Blob([response.data]))
  let href = window.URL.createObjectURL(blob); //创建下载的链接
  if (window.navigator.msSaveBlob) {
      // ie 浏览器
      try {
        window.navigator.msSaveBlob(blob, tagFileName)
      } catch (e) {
        console.log(e)
      }
  } else {
      // 谷歌浏览器 创建a标签 添加download属性下载
      let downloadElement = document.createElement('a');
      if (typeof blob == 'string') {
          downloadElement.target = '_blank';
      }

      downloadElement.href = href;
      downloadElement.download = tagFileName;
      document.body.appendChild(downloadElement);
      downloadElement.click(); //点击下载
      document.body.removeChild(downloadElement); //下载完成移除元素
      if (typeof blob != 'string') {
          window.URL.revokeObjectURL(href); //释放掉blob对象
      }
  }
}


// 
export function downloadFile_f(url) {
  var form = document.createElement('form')
  form.id = 'form'
  form.name = 'form'
  form.method = "GET" //请求方式
  form.action = url;
  form.style.display = 'none';
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form)
}


// downloadjs 
export function downloadFile_d(data, strFileName, strMimeType) {
		var self = window, // this script is only for browsers anyway...
			defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
			mimeType = strMimeType || defaultMime,
			payload = data,
			url = !strFileName && !strMimeType && payload,
			anchor = document.createElement("a"),
			toString = function(a){return String(a);},
			myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
			fileName = strFileName || "download",
			blob,
			reader;
			myBlob= myBlob.call ? myBlob.bind(self) : Blob ;
	  
		if(String(this)==="true"){ //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
			payload=[payload, mimeType];
			mimeType=payload[0];
			payload=payload[1];
		}


		if(url && url.length< 2048){ // if no filename and no mime, assume a url was passed as the only argument
			fileName = url.split("/").pop().split("?")[0];
			anchor.href = url; // assign href prop to temp anchor
		  	if(anchor.href.indexOf(url) !== -1){ // if the browser determines that it's a potentially valid url path:
        		var ajax=new XMLHttpRequest();
        		ajax.open( "GET", url, true);
        		ajax.responseType = 'blob';
        		ajax.onload= function(e){ 
				  download(e.target.response, fileName, defaultMime);
				};
        		setTimeout(function(){ ajax.send();}, 0); // allows setting custom ajax headers using the return:
			    return ajax;
			} // end if valid url?
		} // end if url?


		//go ahead and download dataURLs right away
		if(/^data\:[\w+\-]+\/[\w+\-]+[,;]/.test(payload)){
		
			if(payload.length > (1024*1024*1.999) && myBlob !== toString ){
				payload=dataUrlToBlob(payload);
				mimeType=payload.type || defaultMime;
			}else{			
				return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
					navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
					saver(payload) ; // everyone else can save dataURLs un-processed
			}
			
		}//end if dataURL passed?

		blob = payload instanceof myBlob ?
			payload :
			new myBlob([payload], {type: mimeType}) ;


		function dataUrlToBlob(strUrl) {
			var parts= strUrl.split(/[:;,]/),
			type= parts[1],
			decoder= parts[2] == "base64" ? atob : decodeURIComponent,
			binData= decoder( parts.pop() ),
			mx= binData.length,
			i= 0,
			uiArr= new Uint8Array(mx);

			for(i;i<mx;++i) uiArr[i]= binData.charCodeAt(i);

			return new myBlob([uiArr], {type: type});
		 }

		function saver(url, winMode){

			if ('download' in anchor) { //html5 A[download]
				anchor.href = url;
				anchor.setAttribute("download", fileName);
				anchor.className = "download-js-link";
				anchor.innerHTML = "downloading...";
				anchor.style.display = "none";
				document.body.appendChild(anchor);
				setTimeout(function() {
					anchor.click();
					document.body.removeChild(anchor);
					if(winMode===true){setTimeout(function(){ self.URL.revokeObjectURL(anchor.href);}, 250 );}
				}, 66);
				return true;
			}

			// handle non-a[download] safari as best we can:
			if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
				url=url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				if(!window.open(url)){ // popup blocked, offer direct download:
					if(confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")){ location.href=url; }
				}
				return true;
			}

			//do iframe dataURL download (old ch+FF):
			var f = document.createElement("iframe");
			document.body.appendChild(f);

			if(!winMode){ // force a mime that will download:
				url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
			}
			f.src=url;
			setTimeout(function(){ document.body.removeChild(f); }, 333);

		}//end saver




		if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
			return navigator.msSaveBlob(blob, fileName);
		}

		if(self.URL){ // simple fast and modern way using Blob and URL:
			saver(self.URL.createObjectURL(blob), true);
		}else{
			// handle non-Blob()+non-URL browsers:
			if(typeof blob === "string" || blob.constructor===toString ){
				try{
					return saver( "data:" +  mimeType   + ";base64,"  +  self.btoa(blob)  );
				}catch(y){
					return saver( "data:" +  mimeType   + "," + encodeURIComponent(blob)  );
				}
			}

			// Blob but not URL support:
			reader=new FileReader();
			reader.onload=function(e){
				saver(this.result);
			};
			reader.readAsDataURL(blob);
		}
		return true;
}













/**
 * 文件下载
 * 缺点(不支持跨域)
 * @param {*} fileurl     路径
 * @param {*} tagFileName 文件名称
 */
export function downloadFile(fileurl, tagFileName = "") {
  if(fileurl) {
    var xmlHttp = null;
    if(window.XMLHttpRequest) {
      xmlHttp = new XMLHttpRequest();
    } else {
      xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xmlHttp.open('GET', fileurl, true);
    xmlHttp.responseType = 'blob';
    xmlHttp.onload = function () {
      if (xmlHttp.status === 200) {
        let resData = xmlHttp.response;
        console.log(resData)
        if (window.navigator.msSaveBlob) {
          try {
            window.navigator.msSaveBlob(resData, tagFileName)
          } catch (e) {
            console.log(e)
          }
        } else {
          var url = window.URL.createObjectURL(resData);
          var a = document.createElement('a');
          a.style.display = 'none';
          document.body.appendChild(a);
          a.href = url;
          a.download = tagFileName;
          a.click();
          a.remove();
          window.URL.revokeObjectURL(link.href); // 释放 blob
        }
      }
    }
    xmlHttp.withCredentials = true;
    xmlHttp.send();
  }
}


// 文件下载 As 缺点(不支持跨域)
export function downloadFile_As(url, filename) {
  getBlob(url, function (blob) {
    saveAs(blob, filename);
  });
};
function getBlob(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  xhr.onload = function () {
    if (xhr.status === 200) {
      cb(xhr.response);
    }
  };
  xhr.send();
}
  
function saveAs(blob, filename) {
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    var link = document.createElement('a');
    var body = document.querySelector('body');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.style.display = 'none';
    body.appendChild(link);
    link.click();
    body.removeChild(link);
    window.URL.revokeObjectURL(link.href); // 释放 blob
  };  
}



/**
 *  window.URL.createObjectURL()可以直接生成blob:开头的链接，该链接产生于浏览器端，不会占用服务器资源。
 * 
    window.URL.createObjectURL()在IE10, IE11以及Microsoft Edge中生成的blob:链接，你不能把它加到一个<a>节点上，也不能直接在浏览器地址栏打开访问，
    并且得到“Error: 拒绝访问。”错误。open links made by window.URL.createObjectURL in IE/Edge这样的提问到处都是，
    IE9根本不支持window.URL.createObjectURL创建Blob URLs就更惨了。

    Microsoft Internet Explorer / Microsoft Edge和高大上的Google Chrome / Mozilla Firefox对于
    window.URL.createObjectURL创建Blob链接最直观的区别在于得到的blob:链接形式不一样，分别在微软浏览器和标准浏览器中运行以下代码，
    得到两种Blob链接形式，第一种为chrome和firefox生成的带有当前域名的标准blob:链接形式，
    第二种为Microsoft IE和Microsoft Edge生成的不带域名的blob:链接。
    可以通过window.URL.createObjectURL(new Blob()) . indexOf(location.host) < 0来检测是否是IE或早期生成Object URL不带域名的Edge。
    如果表达式返回true则是IE或Edge旧版本。
 */
function t(data, FileName) {
  let blob = new Blob([data])
  if('msSaveOrOpenBlob' in navigator){
    window.navigator.msSaveOrOpenBlob(blob, FileName+'.csv');
  }else{
    let url = window.URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.setAttribute('download', FileName+'.csv');
    document.body.appendChild(link);
    link.click()
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url); // 释放 blob
  }
}
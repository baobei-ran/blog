import h_fetch from "./h_fetch_2";


// 添加一个请求拦截器
h_fetch.interceptors.request.use(function (config) {
    console.log(config);
    return config;
  });

// 添加一个响应拦截器
h_fetch.interceptors.response.use(function (response) {
    console.log(response);
    return response;
});

let baseUrl = 'http://test.api.yunyikang.net/hospital';

export default {
    post: function (url, data) {
        return h_fetch(baseUrl+url, {
            body: JSON.stringify(data),         // must match 'Content-Type' header
            cache: 'no-cache',                  // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin',         // include, same-origin, *omit
            headers: {
              'user-agent': 'Mozilla/4.0 MDN Example',
              'content-type': 'application/json'
            },
            method: 'POST',                     // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',                       // no-cors, cors, *same-origin
            redirect: 'follow',                 // manual, *follow, error
            referrer: 'no-referrer',            // *client, no-referrer
          })
          .then(response => response.json())    // parses response to JSON
    }
}



// 使用

// import http from "h_fetch_request";

// export function HmessageRecords(params) {
//     return http.post('/messageRecords', params)
// }






export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
	type = type.toUpperCase();
	url = baseUrl + url;
 
        // 此处规定get请求的参数使用时放在data中，如同post请求
	if (type == 'GET') {
		let dataStr = ''; 
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})
 
		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}
 
        // 对于支持fetch方法的浏览器，处理如下：
	if (window.fetch && method == 'fetch') {
		let requestConfig = {
                        // fetch默认不会带cookie，需要添加配置项credentials允许携带cookie
			credentials: 'include', 
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			mode: "cors", // 以CORS的形式跨域
			cache: "force-cache"
		}
 
		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify(data)
			})
		}
		
		try {
			const response = await fetch(url, requestConfig);
			const responseJson = await response.json();
			return responseJson
		} catch (error) {
			throw new Error(error)
		}
	} else { // 对于不支持fetch的浏览器，便自动使用 ajax + promise
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject; // 兼容IE
			}
 
			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}
 
			requestObj.open(type, url, true);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send(sendData);
 
			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
		})
	}
}

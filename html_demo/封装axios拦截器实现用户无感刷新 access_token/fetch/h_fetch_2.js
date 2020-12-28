
// 定义用来存储拦截请求和拦截响应结果的处理函数集合
let interceptors_req = [], interceptors_res = [];

function h_fetch(url, options) {
    // 1、转换成大写：toUpperCase()
    // 2、转换成小写：toLowerCase()

    if (!options.method) {         // 默认设置为 get 请求
        options.method = 'GET';
    }

    // interceptors_req是拦截请求的拦截处理函数集合
    interceptors_req.forEach(interceptors => {
        options = interceptors(options)
    })

    return new Promise(function (resolve, reject) {

        fetch(url, options).then(res => {
            // interceptors_res是拦截响应结果的拦截处理函数集合
            interceptors_res.forEach(interceptors => {
                // 拦截器对响应结果做处理，把处理后的结果返回给响应结果
                res = interceptors(res)
            })
            // 将拦截器处理后的响应结果resolve出去
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

  // 在h_fetch函数上面增加拦截器interceptors，拦截器提供request和response两种拦截器功能。
  // 可以通过request和response的use方法来绑定两种拦截器的处理函数。
  // use方法接收一个参数，参数为一个callback函数，callback函数用来作为拦截器的处理函数；
  // request.use方法会把callback放在interceptors_req中，等待执行。
  // response.use方法会把callback放在interceptors_res中，等待执行。
  // 拦截器的处理函数callback接收一个参数。
  // request拦截器的callback接收的是请求发起前的config；
  // response拦截器的callback接收的是网络请求的response结果。
  h_fetch.interceptors = {
    request: {
      use: function (callback) {
        interceptors_req.push(callback);
      }
    },
    response: {
      use: function (callback) {
        interceptors_res.push(callback);
      }
    }
  }

export default h_fetch;
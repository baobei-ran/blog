/*
 * @Description: 解决window.requestAnimationFrame多浏览器兼容问题
 * @Author: 清风浩明月
 * @Date: 2021-03-22 10:11:08
 * @version: 
 */

// 解决 window.requestAnimationFrame 多浏览器兼容问题
// requestAnimationFrame 在低版本浏览器不支持，进行兼容处理

(function() {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame =
        window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }
  if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function() { callback(currTime + timeToCall); },
            timeToCall);
          lastTime = currTime + timeToCall;
          return id;
      };
  if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
      };
}());

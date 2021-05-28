/*
 * @Author: 清风浩明月
 * @Date: 2021-05-11 09:33:12
 * @version: 
 * @Description: 
 */

// es6

const a1 = document.querySelectorAll("div");
const b1 = [...a1];
console.log(a1, b1)


// babel 转换 es5
function _toConsumableArray(arr) {
    return (
      _arrayWithoutHoles(arr) ||            // 判断是否为数组
      _iterableToArray(arr) ||              // 判断是否为实现了遍历器（Iterator）接口的对象
      _unsupportedIterableToArray(arr) ||   // 判断是否为普调字符串/Map/Set等
      _nonIterableSpread()                  // 抛错提示
    );
  }
  
  function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  
  function _iterableToArray(iter) {
    if (
      (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
      iter["@@iterator"] != null
    )
      return Array.from(iter);
  }
  
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  
var a = document.querySelectorAll("div");
  
var b = _toConsumableArray(a);
  
console.log(a, b);
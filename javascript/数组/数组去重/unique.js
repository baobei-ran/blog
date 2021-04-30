/*
 * @Author: 清风浩明月
 * @Date: 2021-04-21 09:23:30
 * @version: 
 * @Description: 
 */


// 使用indexof
function unique(arr) {
  var array = [];//用新数组来装
  for (let i = 0; i < arr.length; i++) {
      if (array.indexOf(arr[i]) === -1) {
        //indexof返回-1表示在新数组中不存在该元素
        array.push(arr[i])//是新数组里没有的元素就push入
      }
  }
  return array;
}

// 使用 includes
function unique(arr) {
  var array =[];
  for(var i = 0; i < arr.length; i++) {
    if(!array.includes(arr[i]) ) {
    //includes 检测数组是否有某个值
      array.push(arr[i]);
    }
  }
  return array
}


// 使用sort方法先排序，使相同的元素都相邻
function unique(arr) {
  arr = arr.sort((a, b) => a - b)//sort先按从小到大排序
  var arrry= [arr[0]];
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i-1]) {
          arrry.push(arr[i]);
      }
  }
  return arrry;
}



// 使用Map
function unique(arr) {
  let map = new Map();
  let array = new Array();  // 数组用于返回结果
  for (let i = 0; i < arr.length; i++) {
    if(map.has(arr[i])) {  // 如果有该key值
      map.set(arr[i], true); 
    } else { 
      map.set(arr[i], false);   // 如果没有该key值
      array.push(arr[i]);
    }
  } 
  return array ;
}


// 使用filter， filter英文意思是筛选，filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。其回调函数包含三个参数(数组中当前正在处理的元素,在处理的元素在数组中的索引(可选),调用了 filter 的数组本身(可选))
function unique(arr) {
  return arr.filter(function (item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    //不是那么就证明是重复项，就舍弃
    return arr.indexOf(item) === index;
  })
}


// 使用reduce加includes
function unique(arr){
  let result=arr.reduce((acc,cur)=>{
      if(!acc.includes(cur)){
          acc.push(cur);
      }
      return acc;
  },[])//[]作为回调函数的第一个参数的初始值
  return result
}

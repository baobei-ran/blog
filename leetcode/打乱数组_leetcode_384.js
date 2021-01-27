/*
 * @Author: 清风
 * @Date: 2021-01-11 16:34:27
 * @Description:  leetcode384：打乱数组（洗牌算法）
 * 
 */


 /**
  *  打乱一个没有重复元素的数组。

    示例:

        // 以数字集合 1, 2 和 3 初始化数组。
        int[] nums = {1,2,3};
        Solution solution = new Solution(nums);

        // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
        solution.shuffle();

        // 重设数组到它的初始状态[1,2,3]。
        solution.reset();

        // 随机返回数组[1,2,3]打乱后的结果。
        solution.shuffle();
  */

  
//   方法一： 浅拷贝数组，利用random()方法重制数组角标
/**
 * 
 * @param { number[] } nums 
 */
var Solution = function (nums) {
    this.nums = nums      
}

/**
 *  @return { number[] }
 */
Solution.prototype.reset = function () {
    return this.nums
}

/**
 *  @return { number[] }
 */
Solution.prototype.shuffle = function () {
    let num = this.nums.slice();
    for (let i = 0; i < num.length; i++) {
        let index = Math.floor((i + 1) * Math.random());
        [num[index], num[i]] = [num[i], num[index]]
    }
    return num;
}



// 方法二：  解答：Fisher-Yates 洗牌算法


let Solution_2 = function (arr) {
    this.arr = arr;
}

Solution_2.prototype.reset = function () {
    return this.arr;
}


Solution_2.prototype.shuffle = function () {
    let res = [...this.arr];
    let n = res.length;
    for (let i = n - 1; i >= 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        swap(res, randIndex, i)
    }
    return res
}

let swap = function (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}



// 方法三：
/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle_2 = function() {
    let copyArr = [...this.nums];
    let len = copyArr.length;
    for(let i = len - 1; i >=0; i-- ) {
        let index = ~~(Math.random() * (i+1));
        [copyArr[index], copyArr[i]] = [copyArr[i], copyArr[index]];
    }
    return copyArr;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle_2()
 */


// 方法四
function solution(arr) {
    let tempArr = arr.slice()
    for (let i = 0; i < tempArr.length; i++) {
      let index = Math.floor(Math.random() * (tempArr.length - i) + i)
      let temp = tempArr[i]
      tempArr[i] = tempArr[index]
      tempArr[index] = temp
    }
    return tempArr
}
/*
 * @Author: 清风
 * @Date: 2020-12-21 17:52:40
 * @Description: // 
 */

// 数组去重

// 方式一：indexOf
function unique(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

// 方式二：Set（ES6）
function unique2(arr) {
    return Array.from(new Set(arr))
}

var unique3 = arr => [...new Set(arr)];


// 方式三：reduce
function unique5(arr) {
    return arr.sort().reduce((acc, cur) => {
        if (acc.length === 0 || acc[acc.length - 1] !== cur) {
            acc.push(cur);
        }
        return acc
    }, [])
};

//  方式四：filter 和 indexOf
function unique4(arr) {
    return arr.filter((element, index, array) => {
        return array.indexOf(element) === index;
    })
}


/**
 *  以上数组去重，都返回一个新的数组，
 * 
 *  新的面试需求，腾讯：不产生新数组，删除数组里的重复元素
 * 
 *  来源：https://github.com/sisterAn/JavaScript-Algorithms/issues/135
 */


//  方法一: 排序去重

const removeDuplicates = (nums) => {
    // 原地排序
    nums.sort()
    console.log(nums)
    // 去重
    let len = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[len++] = nums[i];
        }
    }
    // 删除重复项
    console.log(len)
    nums.splice(len);
    return nums;
}
const removeDuplicates2 = (nums) => {
    // 原地排序
    nums.sort()
    console.log(nums)
    // 去重
    let len = 1
    for (let i = 1; i < nums.length; i++)
        if (nums[i] != nums[i - 1]) nums[len++] = nums[i];
    // 删除重复项
    nums.splice(len)
    return nums
}

let testArr = [78, 5, 3, 78, 5, 2, 9];
let testArr2 = [78, 5, 3, 78, 5, 2, 9];

// console.log(removeDuplicates(testArr), removeDuplicates2(testArr2))


// 方法二：优化

const HremoveDuplicates = (nums) => {
    let len = nums.length - 1
    for (let i = len; i >= 0; i--) {
        if (nums.indexOf(nums[i]) != i) {
            nums[i] = nums[len--]
        }
    }
    // 删除重复项
    nums.splice(len + 1)
    return nums
}
// 测试
console.log(HremoveDuplicates([1, 2, 3, 1, 3]))


const Hunique2 = function (nums) {
    let len = nums.length - 1;
    for (let j = len; j >= 0; j--) {
        console.log(nums.indexOf(nums[j]), j)
        if (nums.indexOf(nums[j]) != j) {
            nums[j] = nums[len--]
        }
    }
    // 删除重复项
    nums.splice(len + 1);
    return nums;
}

console.log(Hunique2(testArr))


// 方法三
function setArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            // 第一个等同于第二个，splice方法删除第二个
            arr.splice(j, 1);
            j--
          }
      }
    }
    return arr
}

// 方法四
function setArr2(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i) {
            arr.splice(i, 1);
            i--
        }
    }
    return arr
}


// 方法五

let uniqueArr = function uniqueArr(arr) {

    let map = {};

    let len = arr.length - 1;

    while (len >= 0) {
        let item = arr[len];
        if (map[item]) {
            arr.splice(len, 1)
        } else {
            map[item] = true;
        }
        len--;
    }

    return arr;

}


// 方法六

function setArr6 (arr, map = new Map()) {
    let idx = arr.length - 1;
    while (idx >= 0) {
        if (map.get(arr[idx])) {
            arr.splice(idx, 1)
        } else {
            map.set(arr[idx], true)
        }
        idx--;
    }
    return arr
}


/**
    数组扁平化（又称数组降维）

    MDN：flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回

*/

const test = ["a", ["b", "c"], ["d", ["e", ["f"]], "g"]]

// flat不传参数时，默认扁平化一层
test.flat()
// ["a", "b", "c", "d", ["e", ["f"]], "g"]

// flat传入一个整数参数，整数即扁平化的层数
test.flat(2)
// ["a", "b", "c", "d", "e", ["f"], "g"]

// Infinity 关键字作为参数时，无论多少层嵌套，都会转为一维数组
test.flat(Infinity)
// ["a", "b", "c", "d", "e", "f", "g"]

// 传入 <=0 的整数将返回原数组，不扁平化
test.flat(0)
test.flat(-1)
// ["a", ["b", "c"], ["d", ["e", ["f"]], "g"]]

// 如果原数组有空位，flat()方法会跳过空位。
let a = ["a", "b", "c", "d",,]
a.flat();
// ["a", "b", "c", "d"]


/**
 *  Array.prototype.flat() 总结：

        1) Array.prototype.flat() 用于将嵌套的数组扁平化，成为一维数组。该方法返回一个新的数组，对原数据没有影响
        2) 不传参数时，默认扁平化一层；传入一个整数时，这个整数代码想要扁平化的层数
        3) 传入 <=0 的整数将不进行扁平化，返回原数组
        4) Infinity 关键字作为参数时，无论是多少层嵌套，都会转为一维数组
        5) 另外，注意：如果原数组有空位，Array.prototype.flat() 会跳过空位
 */

//  实现 flat 函数：

function _flat(arr, depth = 1) {
    return depth > 0 ? arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            return [...acc, ..._flat(cur, depth = 1)]
        }
        return [...acc, cur]
    }, []) : arr
}


// 使用 reduce 方法实现扁平化
function flattenDeep(arr) {
    return Array.isArray(arr) ? arr.reduce((acc, cur) => [...acc, ...flattenDeep(cur)], []) : [arr];
}

// 测试
var test1 = ["a", ["b", "c"], ["d",['浩浩'], ["e", ["f"]], "g"]]

flattenDeep(test1) // ["a", "b", "c", "d", "e", "f", "g"]



// 方法二： 栈

function flattenDeep2(arr) {
    const reslut = [];

    // 将数组元素拷贝至栈，直接赋值会改变原数组
    const stack = [...arr];
    // 如果栈不为空，则循环遍历
    while (stack.length !== 0) {
        const val = stack.pop();
        if (Array.isArray(val)) {
            // 如果是数组再次入栈，并且展开了一层
            stack.push(...val)
        } else {
            // 如果不是数组，就用头插法插入到结果数组中
            reslut.unshift(val)
        }
    }
    return reslut;
}


console.log(flattenDeep2(test1), _flat(test1))

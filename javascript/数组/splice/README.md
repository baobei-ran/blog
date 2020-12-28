## 来源：https://github.com/sisterAn/JavaScript-Algorithms/issues/138

# 模拟实现 Array.prototype.splice


```
    splice

        array.splice(start[, deleteCount[,item1[, item2[, ...]]]])

        MDN: splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并已数组的形式返回被修改的内容，此方法会改变原数组

    Array.prototype.splice() 的用法如下：

        array.splice(start) 删除数组中从下标 start 开始（包含start）的所有元素
        array.splice(start, deleteCount) 删除数组中从下标 start 开始（包含start）的 deleteCount 元素
        array.splice(start, deleteCount, item1, item2, ...) 删除数组中从下标 start 开始（包含start）的 deleteCount 元素，然后再相同位置上插入 item1,item2, ...

    特征包含如下：

        start：可正可负，正数表示从下标为 start 的位置开始修改，如果 start > array.length - 1，则表示从数组末尾处开始修改；负数表示从数组末尾开始的第几位（从-1计数，这意味着-n是倒数第n个元素并且等价于array.length - n）
        deleteCount: 表示从 start 开始要移除的元素个数，省略则表示把 start 之后的所有元素都移除，如果是 0 或负数，则不移除元素
        item1, item2, ... ：要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素
        返回：被删除的元素组成的一个数组

    实现思路：

        处理 start 负数或超出边界问题，计算真实有效的开始位置 startIndex
        处理 deleteCount 负数问题，计算真实有效的删除元素个数 delCount
        从 startIndex 开始删除 delCount 个元素并原地添加 item1, item2, … （添加元素个数为 addCount ）
            1) 拷贝删除的 delCount 到新数组 deletedElements ，用于 array.splice 函数返回
            2) 如果 delCount > addCount （删除的元素个数大于添加元素）：将数组中 startIndex + delCount 后的元素向前移动 delCount - addCount 个位置，将添加元素拷贝进来
            3) 如果 delCount = addCount （删除的元素个数等于添加元素）：直接将添加元素覆盖删除元素即可
            4) 如果 delCount < addCount （删除的元素个数小于添加元素）：将数组中 startIndex + delCount 后的元素向后移动 addCount - delCount 个位置，将元素拷贝进来
        返回 deletedElements


    代码实现：

        Array.prototype._splice = function(start, deleteCount) {
            // 入参元素个数
            let argumentsLen = arguments.length
            // 数组
            let array = Object(this)
            // 数组长度
            let len = array.length
            // 添加元素个数
            let addCount = argumentsLen > 2 ? argumentsLen -2 : 0
            // 计算有效的 start
            let startIndex = computeSpliceStartIndex(start, array)
            // 计算有效的 deleteCount
            let delCount = computeSpliceDeleteCount(startIndex, deleteCount, len)
            // 记录删除的数组元素
            let deletedElements = new Array(delCount)
            
            // 将待删除元素记录到 deletedArray
            recordDeleteElements(startIndex, delCount, array, deletedElements)
            
            // 移动数组元素
            moveElements(startIndex, delCount, array, addCount)
            
            let i = startIndex
            let argumentsIndex = 2
            
            // 插入新元素
            while (argumentsIndex < argumentsLen) {
                array[i++] = arguments[argumentsIndex++]
            }
            
            array.length = len - delCount + addCount

            // 返回删除元素数组
            return deletedElements;
        }

        // 计算真实的 start
        function computeSpliceStartIndex(start, len) {
            // 处理负值，如果负数的绝对值大于数组的长度，则表示开始位置为第0位
            if(start < 0) {
                start += len
                return start < 0 ? 0 : start
            }
            // 处理超出边界问题
            return start > len - 1 ? len - 1: start
        } 

        // 计算真实的 deleteCount
        function computeSpliceDeleteCount(startIndex, deleteCount, len) {
            // 超出边界问题
            if(deleteCount > len - startIndex) deleteCount = len - startIndex
            // 负值问题
            if(deleteCount < 0) deleteCount = 0
            return deleteCount
        }

        // 记录删除元素，用于 Array.prototype.splice() 返回
        function recordDeleteElements(startIndex, delCount, array, deletedElementd) {
            for(let i = 0; i < delCount; i++) {
                deletedElementd[i] = array[startIndex + i]
            }
        }

        // 移动数组元素，便于插入新元素
        function moveElements(startIndex, delCount, array, addCount) {
            let over = addCount - delCount
            if(over) {
                // 向后移
                for(let i = array.length - 1; i >= startIndex + delCount; i--) {
                    array[i+over] = array[i]
                }
            } else if (over < 0) {
                // 向前移
                for(let i = startIndex + delCount; i <= array.length - 1; i++) {
                    if(i + Math.abs(over) > array.length - 1) {
                        // 删除冗于元素
                        delete array[i]
                        continue
                    }
                    array[i] = array[i + Math.abs(over)]
                }
            }
        }

        let months = ['Jan', 'March', 'April', 'June']
        console.log(months._splice(1, 1, 'Feb'))
        // ["March"]
        console.log(months)
        // ["Jan", "Feb", "April", "June"]



    补充：密封对象与冻结对象
    密封对象：通常一个对象是可扩展的（可以添加新的属性）。密封一个对象会让这个对象变的不能添加新属性，且所有已有属性会变的不可配置。属性不可配置的效果就是属性变的不可删除，以及一个数据属性不能被重新定义成为访问器属性，或者反之。但属性的值仍然可以修改。尝试删除一个密封对象的属性或者将某个密封对象的属性从数据属性转换成访问器属性，结果会静默失败或抛出TypeError（在严格模式 中最常见的，但不唯一）

    --MDN

        if(delCount !== addCount && Object.isSealed(array)) {
            throw new TypeError('the array is sealed')
        }


    冻结对象：数组作为一种对象，被冻结，其元素不能被修改。没有数组元素可以被添加或移除。

    --MDN

        if(delCount > 0 && addCount > 0 && Object.isFrozen(array)) {
            throw new TypeError('the array is frozen')
        }



```


### v8源码

```
    function ArraySplice(start, delete_count) {
        CHECK_OBJECT_COERCIBLE(this, "Array.prototype.splice");
            
        // 参数
        var num_arguments = arguments.length;
        // 数组
        var array = TO_OBJECT(this);
        // 数组长度
        var len = TO_LENGTH(array.length);
        // 计算有效的 start_i
        var start_i = ComputeSpliceStartIndex(TO_INTEGER(start), len);
        // 计算有效的 del_count
        var del_count = ComputeSpliceDeleteCount(delete_count, num_arguments, len,
                                                start_i);
        // 返回数组
        var deleted_elements = ArraySpeciesCreate(array, del_count);
        deleted_elements.length = del_count;
        // 添加元素个数
        var num_elements_to_add = num_arguments > 2 ? num_arguments - 2 : 0;
            
        // 如果是密封对象且删除元素个数与添加元素个数不一致，报错
        if (del_count != num_elements_to_add && %object_is_sealed(array)) {
            throw %make_type_error(kArrayFunctionsOnSealed);
        } else if (del_count > 0 && %object_is_frozen(array)) {
            // 如果是冻结对象且删除元素个数大于0，报错
            throw %make_type_error(kArrayFunctionsOnFrozen);
        }
            
        // 计算变更元素
        var changed_elements = del_count;
        if (num_elements_to_add != del_count) {
            // If the slice needs to do a actually move elements after the insertion
            // point, then include those in the estimate of changed elements.
            changed_elements += len - start_i - del_count;
        }
            
        // 移动元素
        if (UseSparseVariant(array, len, IS_ARRAY(array), changed_elements)) {
            %NormalizeElements(array);
            if (IS_ARRAY(deleted_elements)) %NormalizeElements(deleted_elements);
            SparseSlice(array, start_i, del_count, len, deleted_elements);
            SparseMove(array, start_i, del_count, len, num_elements_to_add);
        } else {
            SimpleSlice(array, start_i, del_count, len, deleted_elements);
            SimpleMove(array, start_i, del_count, len, num_elements_to_add);
        }

        // 将添加元素插入到删除元素的位置
        var i = start_i;
        var arguments_index = 2;
        var arguments_length = arguments.length;
        while (arguments_index < arguments_length) {
            array[i++] = arguments[arguments_index++];
        }
        array.length = len - del_count + num_elements_to_add;

        // Return the deleted elements.
        return deleted_elements;
    }


    ![Array.prototype.splice源码地址](https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js#L660)

    
```

```
    总结
        
        splice 实现原理很简单，核心就是移动删除元素的边界，使无效元素个数与添加元素个数一致，然后用添加元素覆盖进去， 注意 splice 是原地操作，不创建新数组，需要判读数组是否被密封或冻结

        
    完整代码实现

        Array.prototype._splice = function(start, deleteCount) {
            // 入参元素个数
            let argumentsLen = arguments.length
            // 数组
            let array = Object(this)
            // 数组长度
            let len = array.length
            // 添加元素个数
            let addCount = argumentsLen > 2 ? argumentsLen -2 : 0
            // 计算有效的 start
            let startIndex = computeSpliceStartIndex(start, array)
            // 计算有效的 deleteCount
            let delCount = computeSpliceDeleteCount(startIndex, deleteCount, len)
            // 记录删除的数组元素
            let deletedElements = new Array(delCount)
            
            // 将待删除元素记录到 deletedArray
            recordDeleteElements(startIndex, delCount, array, deletedElements)
            
            // 密封对象
            if(delCount !== addCount && Object.isSealed(array)) {
                throw new TypeError('the array is sealed')
            }
            // 冻结对象
            if(delCount > 0 && addCount > 0 && Object.isFrozen(array)) {
                throw new TypeError('the array is frozen')
            }
            
            // 移动数组元素
            moveElements(startIndex, delCount, array, addCount)
            
            let i = startIndex
            let argumentsIndex = 2
            
            // 插入新元素
            while (argumentsIndex < argumentsLen) {
                array[i++] = arguments[argumentsIndex++]
            }
            
            array.length = len - delCount + addCount

            // 返回删除元素数组
            return deletedElements;
        }

        // 计算真实的 start
        function computeSpliceStartIndex(start, len) {
            // 处理负值，如果负数的绝对值大于数组的长度，则表示开始位置为第0位
            if(start < 0) {
                start += len
                return start < 0 ? 0 : start
            }
            // 处理超出边界问题
            return start > len - 1 ? len - 1: start
        } 

        // 计算真实的 deleteCount
        function computeSpliceDeleteCount(startIndex, deleteCount, len) {
            // 超出边界问题
            if(deleteCount > len - startIndex) deleteCount = len - startIndex
            // 负值问题
            if(deleteCount < 0) deleteCount = 0
            return deleteCount
        }

        // 记录删除元素，用于 Array.prototype.splice() 返回
        function recordDeleteElements(startIndex, delCount, array, deletedElementd) {
            for(let i = 0; i < delCount; i++) {
                deletedElementd[i] = array[startIndex + i]
            }
        }

        // 移动数组元素，便于插入新元素
        function moveElements(startIndex, delCount, array, addCount) {
            let over = addCount - delCount
            if(over) {
                // 向后移
                for(let i = array.length - 1; i >= startIndex + delCount; i--) {
                    array[i+over] = array[i]
                }
            } else if (over < 0) {
                // 向前移
                for(let i = startIndex + delCount; i <= array.length - 1; i++) {
                    if(i + Math.abs(over) > array.length - 1) {
                        // 删除冗于元素
                        delete array[i]
                        continue
                    }
                    array[i] = array[i + Math.abs(over)]
                }
            }
        }

        const months = ['Jan', 'March', 'April', 'June']
        console.log(months._splice(1, 0, 'Feb'))
        // []
        console.log(months)
        // ["Jan", "Feb", "March", "April", "June"]

        console.log(months._splice(4, 1, 'May'))
        // ["June"]
        console.log(months)
        // ["Jan", "Feb", "March", "April", "May"]

```
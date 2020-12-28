/*
 * @Author: 清风
 * @Date: 2020-12-28 09:57:03
 * @Description: 理解高阶函数 （掘金： https://juejin.cn/post/6892886272377880583）
 */

/***
 *  在 JavaScript 中，函数为一等公民（First Class），所谓的 “一等公民”，指的是函数与其他数据类型一样，处于平等地位，
 * 可以赋值给其他变量，也可以作为参数，传入另一个函数，或作为其它函数的返回值。
 *  
 * 
 * 
 *  阅读完本文，你将了解高阶函数、函数组合、柯里化、偏函数、惰性函数和缓存函数的相关知识。
 */


 /**
  *  一、高阶函数
        在数学和计算机科学中，高阶函数是至少满足下列一个条件的函数：
        接受一个或多个函数作为输入；
        输出一个函数。
        接收一个或多个函数作为输入，即函数作为参数传递。这种应用场景，相信很多人都不会陌生。比如常用的 Array.prototype.map() 和 Array.prototype.filter() 高阶函数：
  */

//    Array.prototype.map  高阶函数

    const array = [1, 2, 3, 4]
    const map = array.map(x => x * 2)   // [2,3,6,8]


    // Array.prototype.filter  高阶函数

    const words = ['semlinker', 'kakuqo', 'lolo', 'abao'];
    const result = words.filter(word => word.length > 5); // ["semlinker", "kakuqo"]


/**
 *  而输出一个函数，即调用高阶函数之后，会返回一个新的函数。我们日常工作中，常见的 debounce 和 throttle 函数就满足这个条件，因此它们也可以被称为高阶函数。
 */



 /**
  * 二、函数组合
        函数组合就是将两个或两个以上的函数组合生成一个新函数的过程：
  */
 
    const composeFn = function (f, g) {
        return function (x) {
            return f(g(x))
        }
    }
    
// 在以上代码中，f 和 g 都是函数，而 x 是组合生成新函数的参数。


/**
 *  2.1 函数组合的作用
        在项目开发过程中，为了实现函数的复用，我们通常会尽量保证函数的职责单一，比如我们定义了以下功能函数：
 */


//  trim：去掉前后多余的空格

function trim(input) {
    return input && typeof input === "string" ? input.trim() : input;
}


// split: 将字符串通过分隔符分离成数组

function split(input, delimiter = ",") {
    return typeof input === "string" ? input.split(delimiter) : input;
}

// lowerCase 将字符串转小写

function lowerCase(input) {
    return input && typeof input === "string" ? input.toLowerCase() : input;
}
  
// upperCase 将字符串转大写
function upperCase(input) {
    return input && typeof input === "string" ? input.toUpperCase() : input;
}



/**
 *  在以下的代码中，我们通过 compose 函数实现了一个 trimLowerCaseAndSplit 函数，该函数会对输入的字符串，先执行去空格处理，然后在把字符串中包含的字母统一转换为小写，
 *  最后在使用 , 分号对字符串进行拆分。利用函数组合的技术，我们就可以很方便的实现一个 trimUpperCaseAndSplit 函数。
 * @param  { ...Function } funcs  
 */
function compose(...funcs) {
    return function (x) {
      return funcs.reduce(function (arg, fn) {
        return fn(arg);
      }, x);
    };
}

// 在以上的代码中，我们通过 Array.prototype.reduce 方法来实现组合函数的调度，对应的执行顺序是从左到右。这个执行顺序与 Linux 管道或过滤器的执行顺序是一致的。
// 不过如果你想从右往左开始执行的话，这时你就可以使用 Array.prototype.reduceRight 方法来实现。

const trimLowerCaseAndSplit = compose(trim, lowerCase, split); // 参考上面compose的实现
trimLowerCaseAndSplit(" a,B,C "); // ["a", "b", "c"]



// 其实每当看到 compose 函数，阿宝哥就情不自禁想到 “如何更好地理解中间件和洋葱模型”（https://mp.weixin.qq.com/s/wA2REzDU1R4tDs-N2REjZA） 这篇文章中介绍的 compose 函数：

function _compose(middleware) {
    // 省略部分代码
    return function (context, next) {
      let index = -1;
      return dispatch(0);
      function dispatch(i) {
        if (i <= index)
          return Promise.reject(new Error("next() called multiple times"));
        index = i;
        let fn = middleware[i];
        if (i === middleware.length) fn = next;
        if (!fn) return Promise.resolve();
        try {
          return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
        } catch (err) {
          return Promise.reject(err);
        }
      }
    };
  }





/**
 *  三、柯里化
        柯里化（Currying）是一种处理函数中含有多个参数的方法，并在只允许单一参数的框架中使用这些函数。这种转变是现在被称为 “柯里化” 的过程，在这个过程中我们能把一个带有多个参数的函数转换成一系列的嵌套函数。它返回一个新函数，这个新函数期望传入下一个参数。当接收足够的参数后，会自动执行原函数。
        在理论计算机科学中，柯里化提供了简单的理论模型，比如：在只接受一个单一参数的 lambda 演算中，研究带有多个参数的函数的方式。与柯里化相反的是 Uncurrying，一种使用匿名单参数函数来实现多参数函数的方法。比如：
 */

    const func = function (a) {
        return function (b) {
            return a * a + b * b
        }
    }
    
    func(3)(4)  // 25
    

// 3.2 柯里化的实现
// 现在我们已经知道了，当柯里化后的函数接收到足够的参数后，就会开始执行原函数。而如果接收到的参数不足的话，就会返回一个新的函数，用来接收余下的参数。基于上述的特点，我们就可以自己实现一个 curry 函数：


    function curry(func) {
        return function curried(...args) {
            if (args.length >= func.length) {   // 通过函数的 length 属性，来获取函数的形参个数
                return func.apply(this, args)
            } else {
                return function (...args2) {
                    return curried.apply(this, args.concat(args2))
                }
            }
        }
    }


    //  延迟计算/运行
    const add = function (a, b) {
        return a + b;
    };
      
    const curried1 = curry(add);
    const plusOne = curried1(1);
    
// console.log(plusOne(5)) // 6


//  接下来我们实现 Lodash 提供的 curry 函数来直观感受一下，对函数进行 “柯里化” 处理之后产生的变化：（https://www.lodashjs.com/docs/lodash.curry）
    const abc = function(a, b, c) {
        return [a, b, c];
    };
   
  const curried = curry(abc);
   
  console.log(curried(1)(2)(3)); // => [1, 2, 3]
  console.log(curried(1, 2)(3)); // => [1, 2, 3]
  console.log(curried(1, 2, 3)); // => [1, 2, 3]




/**
 *  四、偏函数应用
        在计算机科学中，偏函数应用（Partial Application）是指固定一个函数的某些参数，然后产生另一个更小元的函数。而所谓的元是指函数参数的个数，比如含有一个参数的函数被称为一元函数。
        偏函数应用（Partial Application）很容易与函数柯里化混淆，它们之间的区别是：
        偏函数应用是固定一个函数的一个或多个参数，并返回一个可以接收剩余参数的函数；
        柯里化是将函数转化为多个嵌套的一元函数，也就是每个函数只接收一个参数。
        了解完偏函数与柯里化的区别之后，我们来使用 Lodash 提供的 partial 函数来了解一下它如何使用。
 */


//  4.1 偏函数的使用    (参考lodash的partials：https://www.lodashjs.com/docs/lodash.partial)
    function buildUri(scheme, domain, path) {
    return `${scheme}://${domain}/${path}`;
    }

    const myGithubPath = partial(buildUri, "https", "github.com");
    const profilePath = myGithubPath("semlinker/semlinker");
    const awesomeTsPath = myGithubPath("semlinker/awesome-typescript");
    
    console.log(profilePath, awesomeTsPath)
    


// 偏函数的实现
// 偏函数用于固定一个函数的一个或多个参数，并返回一个可以接收剩余参数的函数。基于上述的特点，我们就可以自己实现一个 partial 函数：

function partial(fn) {
    let args = [].slice.call(arguments, 1);
    return function () {
        const newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this, newArgs);
    }
}





/**
 *  五、惰性函数
        由于不同浏览器之间存在一些兼容性问题，这导致了我们在使用一些 Web API 时，需要进行判断，比如：
 */

    function _addHandler(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false)   
        } else if (element.attachEvent) {
            element.attachEvent("on"+type, handler)
        } else {
            element["on" + type] = handler;
        }
    }
    
// 在以上代码中，我们实现了不同浏览器 添加事件监听 的处理。代码实现起来也很简单，但存在一个问题，即每次调用的时候都需要进行判断，很明显这是不合理的。
// 对于上述这个问题，我们可以通过惰性载入函数来解决。


/**
 *  5.1 惰性载入函数
        所谓的惰性载入就是当第 1 次根据条件执行函数后，在第 2 次调用函数时，就不再检测条件，直接执行函数。
        要实现这个功能，我们可以在第 1 次条件判断的时候，在满足判断条件的分支中覆盖掉所调用的函数，具体的实现方式如下所示：
 */


function addHandler(element, type, handler) {
    if (element.addEventListener) {
        addHandler = function (element, type, handler) {
        element.addEventListener(type, handler, false);
        };
    } else if (element.attachEvent) {
        addHandler = function (element, type, handler) {
        element.attachEvent("on" + type, handler);
        };
    } else {
        addHandler = function (element, type, handler) {
        element["on" + type] = handler;
        };
    }
    // 保证首次调用能正常执行监听
    return addHandler(element, type, handler);
}


// 除了使用以上的方式，我们也可以利用自执行函数来实现惰性载入：

    const addHandler_ = (function () {
        if (document.addEventListener) {
            return function (element, type, handler) {
                element.addEventListener(type, handler, false);
            };
        } else if (document.attachEvent) {
            return function (element, type, handler) {
                element.attachEvent("on" + type, handler);
            };
        } else {
            return function (element, type, handler) {
                element["on" + type] = handler;
            };
        }
    })();
    
// 通过自执行函数，在代码加载阶段就会执行一次条件判断，然后在对应的条件分支中返回一个新的函数，用来实现对应的处理逻辑。



/**
 *  六、缓存函数
        缓存函数是将函数的计算结果缓存起来，当下次以同样的参数调用该函数时，直接返回已缓存的结果，而无需再次执行函数。这是一种常见的以空间换时间的性能优化手段。
        要实现缓存函数的功能，我们可以把经过序列化的参数作为 key，在把第 1 次调用后的结果作为  value 存储到对象中。在每次执行函数调用前，都先判断缓存中是否含有对应的 key，如果有的话，直接返回该 key 对应的值。
        分析完缓存函数的实现思路之后，接下来我们来看一下具体如何实现：
 */


    function memorize(fn) {
        const cache = Object.create(null);  // 存储缓存数据的对象
        return function (...args) {
            const _args = JSON.stringify(args);
            return cache[_args] || (cache[_args] = fn.apply(fn, args));
        }
    }

// 定义完 memorize 缓存函数之后，我们就可以这样来使用它：

    let complexCalc = (a, b) => {
        // 执行复杂的计算
        return a + b
    };
    
let memoCalc = memorize(complexCalc);
    console.time()
    console.log(memoCalc(666, 888))
console.timeEnd()
console.time()
console.log(memoCalc(666, 888)); // 从缓存中获取
console.timeEnd()

console.time()
console.log(memoCalc(686, 889)); // 从缓存中获取
console.timeEnd()

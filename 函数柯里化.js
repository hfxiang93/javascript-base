/**
 * Created by xianghiafeng on 2019/12/17.
 */

/**
 * 函数柯里化
 * @param fn
 * @param args
 * @return {Function}
 */
function curry (fn, args = []) {
  return function () {
    let rest = [...args,...arguments]
    if (rest.length<fn.length) {
      return curry.call(this, fn, rest)
    } else {
      return fn.apply(this,rest)
    }
  }
}
// 测试代码
function sum (a,b,c) {
  return a+b+c
}
let sumFn =curry(sum)
console.log(sumFn(1)(2)(3))
console.log(sumFn(1)(2,3))

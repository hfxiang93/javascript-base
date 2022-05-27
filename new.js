/**
 * Created by xianghiafeng on 2019/12/5.
 */
//实现一个new
// 首先创建一个空的对象，空对象的__proto__属性指向构造函数的原型对象
// 把上面创建的空对象赋值构造函数内部的this，用构造函数内部的方法修改空对象
// 如果构造函数返回一个非基本类型的值，则返回这个值，否则上面创建的对象
/**
 *  实现一个new函数
 *
 * @param {Function} fn
 */
function _new(fn, ...args) {
  const obj = Object.create(null);
  Object.setPrototypeOf(obj, fn.prototype);
  const result = fn.apply(obj, args);
  // 根据规范，返回 null 和 undefined 不处理，依然返回obj
  return result instanceof Object ? result : obj;
}

function A(d){
  this.d = d
}
let child = _new(A,1)
console.log(child)

/**
 * es6递归实现数组扁平化处理
 */
const flatten = array => array.reduce(
  (acc, cur) => (
    Array.isArray(cur) ? [...acc, ...flatten(cur)] : [...acc, cur]
  ), []
)

/**
 * 迭代实现数组扁平化
 * @param(arr)
 * @return(arr)
 */
function flattens(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

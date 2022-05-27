/**
 * Created by xianghiafeng on 2019/12/17.
 * call apply bind的区别和内部实现
 * call和apply的功能相同，区别在于传参不同
 * fn.call(obj,arg1,arg2,.....)
 * fn.apply(obj,[argsArray])
 */

/**
 * call核心：
 * 将函数设为传入参数的属性
 * 指定this到函数并传入给定参数执行函数
 * 如果不传入参数或者参数为null，默认指向为 window / global
 * 删除参数上的函数
 */
Function.prototype.call = function (context) {
  /** 如果第一个参数传入的是 null 或者是 undefined, 那么指向this指向 window/global */
  /** 如果第一个参数传入的不是null或者是undefined, 那么必须是一个对象 */
  if (!context){
    context = typeof window === 'undefined' ? global : window
  }
  context.fn = this //this指向的是当前的函数(Function的实例)
  let rest = [...arguments].slice(1) //获取除了this指向对象以外的参数, 空数组slice后返回的仍然是空数组
  let result = context.fn(...rest) //隐式绑定,当前函数的this指向了context.
  delete context.fn
  return result
}


/**
 * apply实现和call差不多，只是第二个参数传的是数组或者类数组
 */
Function.prototype.apply = function (context,rest) {
  if (!context){
    context = typeof window === 'undefined' ? global : window
  }
  context.fn = this
  let result
  if (rest === undefined || rest === null){
    result = context.fn(rest)
  } else if (typeof rest === 'object'){
    result = context.fn(...rest)
  }
  delete context.fn
  return result
}
// 测试代码
const foo = {
  name: 'jack'
}
const name = 'lucy'
function bar (job,age) {
  console.log(this.name)
  console.log(job,age)
}
//测试call
bar.call(foo,'programmer',20) //jack programmer 20
bar.call(null,'programmer',20) // 浏览器环境: lucy programmer 20; node 环境: undefined programmer 20
//测试apply
bar.apply(foo,['teacher',20]) //jack programmer 20
bar.apply(null,['teacher',20]) // 浏览器环境: lucy programmer 20; node 环境: undefined programmer 20

/**
 * bind
 * bind和call/apply有一个很大区别，一个函数在被call/apply的时候是直接调用，而bind会创建一个新函数
 * 当新函数被调用的时候，bind()的第一个参数将作为它运行时的this，之后的一序列参数将会在传递的实参前传入作为它的参数
 */
Function.prototype.bind = function (context) {
  if (typeof this !== 'function'){
    throw new TypeError('not a function')
  }
  let self = this
  let args = [...arguments].slice(1)
  function Fn () {

  }
  Fn.prototype = this.prototype
  let bound = function () {
    let res = [...args,...arguments] //bind传递的参数和函数调用时传递的参数拼接
    context = this instanceof Fn ? this : context || this
    return self.apply(context,res)
  }
  //原型链
  bound.prototype = new Fn()
  return bound
}
function person (age,job,gender) {
  console.log(this.name,age,job,gender)
}
const vue ={
  name: 'vue'
}
let result = person.bind(vue,22,'coder')('female') // vue 22 'coder' 'female'
let result1 = person.bind(null,22,'coder')('female')// 浏览器环境: lucy 22 'coder' 'female'; node 环境: undefined 22 'coder' 'female'
console.log(result)
console.log(result1)


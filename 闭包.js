/**
 * Created by xianghiafeng on 2019/12/16.
 */

/**
 * 什么是闭包？ 闭包的作用是什么？闭包有哪些使用场景？
 * 闭包是指有权访问另一个函数作用域中的变量的函数，创建闭包最常用的方式就是在一个函数内部创建另一个函数
 * 闭包的作用有:
 * 1封装私有变量
 * 2模仿块级作用域(ES5中没有块级作用域)
 * 3实现JS的模块
 */

/**
 * sum  求和
 * @param arr
 * @return {*}
 */
function sum (arr) {
  return arr.reduce((x,y)=>{
    return x+y
  }
)
}
let sums = sum([1,2,3,4,5])
console.log(sums) // 15

/**
 * lazySum 返回求和方法
 * @param arr
 * @return {function(): *}
 */
function lazySum (arr) {
  let sum = function () {
    return arr.reduce((x,y)=>{
      return x+y
    })
  }
  return sum
}
console.log(lazySum([1,2,3])) // function sum(){}

/**
 *  i*i
 * @return {Array}
 */
function count () {
  let arr = []
  for (let i=1;i<=10; i++){
    arr.push((function (n) {
      return n*n
    })(i))
  }
  return arr
}
var results = count()
console.log(results)
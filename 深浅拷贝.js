/**
 * Created by xianghiafeng on 2019/12/17.
 * 深浅拷贝
 * 浅拷贝是指只复制第一层对象，但是当对象的属性是引用类型时，实质复制的是其引用，当引用指向的值改变时也会跟着变化。
 * 深拷贝复制变量值，对于非基本类型的变量，则递归至基本类型变量后，再复制。深拷贝后的对象与原来的对象是完全隔离的，互不影响，对一个对象的修改并不会影响另一个对象。
 */
// 实现一个深拷贝
function deepClone (obj) {
  if (obj === null) return null
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  if (typeof obj !=='object') return obj
  /**
   * 如果obj是数组，那么 obj.constructor 是 [Function: Array]
   * 如果obj是对象，那么 obj.constructor 是 [Function: Object]
   */
  let t = new obj.constructor
  for (let key in obj){
    //如果 obj[key] 是复杂数据类型，递归
    t[key] = deepClone(obj[key])
  }
  return t
}
const car = {
  name:'audi R8',
  color: 'black'
}
let cloneCar = deepClone(car)
console.log(car)
cloneCar.color = 'blue'
console.log(cloneCar)
console.log(car)

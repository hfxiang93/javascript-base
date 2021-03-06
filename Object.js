/**
 * Created by xianghiafeng on 2019/12/16.
 */
var arr =[1,23,4]
// 原型链是 arr->Array.prototype->Object.prototype->null
function foo () {
  return 0
}
// 原型链是foo->Function.prototype->Object.prototype->null
// 构造函数
function Student (name) {
  this.name = name
  this.hello = function () {
    console.log('hello'+this.name)
  }
}
let student = new Student('jack')
student.hello()
// 取数组的最大值
// ES5写法
Math.max.apply(null,[1,2,3,45,2,5])
// ES6写法
Math.max(...[1,2,43,3,5])
// 递归写法reduce
[1,23,32,5,43,2].reduce((x,y)=>{
  return x = x > y ? x : y
})
let person = {
  'wo cao': 'wocao',
  [2+'ab']: 5544,
  sayHello(name = 'obj'){
    console.log(`hello,${name}`)
  }
}
console.log(person["wo cao"])
console.log(person[2+'ab'])
person.sayHello('hdf')
console.log(Object.getOwnPropertyDescriptor(person,'wo cao'))
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
console.log(Reflect.ownKeys(person))
const {sayHello} = person
console.log(sayHello())

/**
 * Created by xianghiafeng on 2019/12/17.
 */
/**
 * 原型：
 * 在 JavaScript 中，每当定义一个对象（函数也是对象）时候，
 * 对象中都会包含一些预定义的属性。其中每个函数对象都有一个prototype 属性，
 * 这个属性指向函数的原型对象。使用原型对象的好处是所有对象实例共享它所包含的属性和方法
 */
/**
 * 原型链
 * 原型链主要是来解决继承问题的
 * 构造函数 Parent Parent.prototype 和实例 person的关系：
 * person.__proto__ === Parent.prototype
 * __proto__ 是每个实例都有的属性，可以访问 [[prototype]] 属性。
 * 实例的__proto__ 与其构造函数的prototype指向的是同一个对象
*/
function Student (name) {
  this.name = name
}
Student.prototype.setAge = function () {
  this.age = 20
}
let Jack = new Student('jack')
console.log(Jack.__proto__)
console.log(Student.prototype)
console.log(Jack.__proto__ === Student.prototype)

/**
 * 组合继承
 * @constructor
 */

function SuperType (name) {
  this.name = name
  this.color = ['red','blue','black']
}
SuperType.prototype.sayName = function () {
  console.log(this.name)
}
function SubType (name,age) {
  SuperType.call(this,name)
  this.age = age
}
SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function () {
  console.log(this.age)
}
let std = new SubType('jack',20)
console.log(std.sayName())
console.log(std.sayAge())

function Person(name){
  this.name = name
}

console.log(Person.prototype)
console.log(Person.__proto__)
console.log(Person.prototype.constructor)
console.log((new Person('jack')).__proto__)
console.log(Person.prototype===(new Person('jack')).__proto__)

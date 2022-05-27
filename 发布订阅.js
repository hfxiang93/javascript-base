/**
 * Created by xianghiafeng on 2019/12/13.
 */
let eventBus = {}
// 列表缓存回调函数
eventBus.list = {}
// 订阅事件
eventBus.on = function (key,fn) {
  // 如果对象中没有对应的key值
  // 也就是说明没有订阅过
  // 那就给key创建个缓存列表
  if (!this.list[key]){
    this.list[key] = []
  }
  // 把函数添加到对应key的缓存列表里
  this.list[key].push(fn)
}
// 发布事件
eventBus.emit = function () {
  // 第一个参数是对应的key值
  // 直接用数组的shift方法取出
  let key = [].shift.call(arguments)
  let fns = this.list[key]
  // 如果缓存列表里没有函数就返回false
  if (!fns || fns.length === 0){
    return false
  }
  // 当发布的时候
  // 遍历key值对应的缓存列表
  // 再把列表里存的函数依次执行
  fns.forEach(fn=>{
    fn.apply(this,arguments)
  })
}
// 测试用例
eventBus.on('join',function (position,salary) {
  console.log('your position is' + position)
  console.log('your salary is' + salary)
})
eventBus.on('skill',function (skill,hobby) {
  console.log('your skill is' + skill)
  console.log('your hobby is' + hobby)
})
eventBus.emit('join','前端',10000)
eventBus.emit('join','后端',10000)
eventBus.emit('skill','code','泡妹子')




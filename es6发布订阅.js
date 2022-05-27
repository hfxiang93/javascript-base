/**
 * Created by xianghiafeng on 2019/12/13.
 */

/**
 * es6手撸简易发布订阅
 * 思路：
 * 1.创建一个对象(缓存列表)
 * 2.on方法用来把回调函数fn加到缓存列表中（事件订阅）
 * 3.emit方法取到arguments里面的第一个参数作为key值，根据key值去执行对应的缓存列表中的函数
 * 4.remove方法可以根据key值取消订阅
 * @class EventBus
 * @function on 订阅事件
 * @function emit 发布事件
 */
class EventBus {
  constructor(){
    // 创建一个事件池缓存订阅事件
    this.pool = {}
  }
  on(key,fn){
    // 判断事件池中有没有对应的key
    // 如果没有，这个事件没有被订阅
    // 那就给key创建一个缓存列表

    if (!this.pool[key]) {
      this.pool[key] = []
    }
    // 把事件添加到对应的key的缓存列表里
    this.pool[key].push(fn)
  }
  emit(){
    // 取第一个参数为对应的key值
    let key = [].shift.call(arguments)
    let fns = this.pool[key]
    // 如果缓存列表里面没有函数事件就返回false
    if (!fns||fns.length===0) {
      return false
    }
    // 遍历缓存列表，执行列表里的事件函数
    fns.forEach(fn=>{
      fn.apply(this,arguments)
    })
  }
  remove(key,fn){
    let fns = this.pool[key]
    // 如果缓存列表中没有函数，返回false
    if (!fns) {
      return false
    }
    // 如果没有传对应函数的话
    // 就会将key值对应缓存列表中的函数都清空掉
    if (!fn) {
      fns&&(fns.length=0)
    } else {
      // 遍历缓存列表，看看传入的fn与哪个函数相同
      // 如果相同就直接从缓存列表中删掉
      fns.forEach((cb,i)=>{
        if (cb===fn) {
          fns.splice(i,1)
        }
      })
    }
  }
}
// 实例化一个EventBus对象
let eventBus = new EventBus()
// 订阅事件
eventBus.on('skill',(skill,hobby)=>{
  console.log(skill)
  console.log(hobby)
})
// 订阅事件
eventBus.on('salary',(position,salary)=>{
  console.log(position)
  console.log(salary)
})
// 发布事件
eventBus.emit('skill','code','妹子')
eventBus.emit('skill','game','lol')
eventBus.emit('salary','nanjing',10000)
eventBus.emit('salary','beijing',20000)
function cat () {
  console.log('miaomiaomiao')
}function dog () {
  console.log('wangwangwang')
}
eventBus.on('pet',data=>{
  console.log('接受数据')
  console.log(data)
})
eventBus.on('pet',cat)
eventBus.on('pet',dog)
eventBus.remove('pet',dog)
eventBus.emit('pet',['二哈','泰迪猫'])
/**
 * Created by xianghiafeng on 2019/12/16.
 */
/**
 * @class  Dragger 拖拽类
 * @function init() 初始化
 * @function initDrag() 初始化拖拽
 * @function move() 拖拽中
 * @function up() 拖拽结束
 */
class Dragger {
  constructor (el){
    this.el = el
    this.mouse = {}
    this.mouse.init = false
    this.init()
    this.initDrag()
  }
  init(){
    this.el.style.position = 'absolute'
    this.el.style.top = `${this.el.offsetTop}px`
    this.el.style.left = `${this.el.offsetLeft}px`
  }
  initDrag(){
    this.el.addEventListener(
      'mousedown',
      e=>{
        if (/input|textarea/.test(e.target.tagName.toLowerCase())) return false
        this.mouse.init = true
        this.mouse.offsetX = e.pageX - this.el.offsetLeft
        this.mouse.offsetY = e.pageY - this.el.offsetTop
        this.moveHandler = this.move.bind(this)
        this.upHandler = this.up.bind(this)
        window.addEventListener('mousedown',this.moveHandler)
        window.addEventListener('mouseup',this.upHandler)
      }
    )
  }
  move(e){
    console.log(e)
    if(!this.mouse.init) return false
    this.el.style.left = e.pageX -this.mouse.offsetX +'px'
    this.el.style.top = e.pageY -this.mouse.offsetY +'px'
  }
  up(){
    this.mouse.init = false
    console.log('ok')
    window.removeEventListener('mousedown',this.moveHandler)
    window.removeEventListener('mouseup',this.upHandler)
  }
}
for (let i=1; i<=100; i++){
  if (i%3===0&&i%5===0){
    console.log('AB')
  }else if (i%3===0){
    console.log('A')
  } else if(i%5===0){
    console.log('B')
  }else {
    console.log(i)
  }
}
const array = [1,2,2,34,2,21,1,1,3,42,5]
  /**
   * 有一个长度为 n 的数组，请求出该数组的前 i 个元素之和。
   * @param array
   * @param index
   * @return {*}
   */
function sum (array,index) {
  return array.splice(0,index).reduce((x,y)=>{
    return x+y
  })
}
console.log(sum(array,6))

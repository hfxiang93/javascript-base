/**
 * Created by xianghiafeng on 2019/12/5.
 */

/**
 * 什么是防抖？什么是节流？
 * 防抖就是触发高频率事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，那么就重新计算时间
 * 思路就是每次触发事件的时候都取消之前的延时调用方法
 * 节流就是高频率事件触发，但是在n秒内只会执行一次，所以节流会稀释函数的执行频率
 * 思路就是每次触发时间的时候都判断当前是否有等待执行的延时函数
 */

//防抖应用场景
// 每次 resize/scroll 触发统计事件
// 文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）
/**
 * debounce   防抖
 * @param func    防抖的高频事件
 * @param time    定义多久时间内高频函数只执行一次
 * @returns {Function}  返回防抖函数
 */
function debounce (func, time) {
  let timer = null // 声明一个timer 用来存放定时器的返回值
  return ()=>{
    clearTimeout(timer) //每次触发高频事件的时候都先清除timer，重新计时
    // 设定一个定时器去触发高频事件 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 func 函数
    timer = setTimeout(()=>{
      func.apply(this, arguments) //用apply绑定this，传递参数
    }, time)
  }
}

/**
 * throttle  节流
 * @param func    节流的高频事件
 * @param time    定义单位时间内高频函数只执行一次
 * @returns {Function}  返回节流函数
 */
// 节流的应用场景：
// DOM 元素的拖拽功能实现（mousemove）
// 射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）
// 计算鼠标移动的距离（mousemove）
// Canvas 模拟画板功能（mousemove）
// 搜索联想（keyup）
// 监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，
// 只有用户停止滚动后，才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次

function throttle (func, time) {
  let activeTime = 0 // 声明一个activeTime 用来存放标记
  return ()=>{
    const current = Date.now() // 获取当前时间
    if(current - activeTime > time){ //当前时间减去标记时间大于规定的time时，执行func，否则不执行
      func.apply(this, arguments)
      activeTime = Date.now() // 当func执行完之后重新设置一下activeTime的值，用于下一次判断
    }
  }
}

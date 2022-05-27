/**
 * Created by xianghiafeng on 2019/12/13.
 */
let EventEmitter = require('events')
let util = require('util')
function Girl () {

}
util.inherits(Girl,EventEmitter)
let girl = new Girl()
let drink = function (data) {
  console.log('喝酒')
  console.log(data)
}
let findboy = function () {
  console.log('交友')
}
girl.on('newListener',function (eventName) {
  console.log(eventName)
})
girl.on('结婚',function () {

})
girl.setMaxListeners(4)
console.log(girl.getMaxListeners())
girl.once('失恋', drink)
girl.once('失恋', drink)
girl.prependListener('失恋',function () {
  console.log('before')
})
girl.once('失恋',drink)
girl.emit('失恋','1')
/**
 * Created by xianghiafeng on 2019/12/13.
 */
// 需要new一下创建一个websocket的实例
// 我们要去连接ws协议
// 这里对应的端口就是服务端设置的端口号8888
let ws = new WebSocket('ws://localhost:8888')
// onopen是客户端与服务端建立连接后触发
ws.onopen = function () {
  ws.send('你好，我是客户端')
}
// onmessage是当服务端给客户端发来消息的时候触发
ws.onmessage = function (res) {
  console.log(res)
  console.log(res.data)
}

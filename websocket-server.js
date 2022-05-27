/**
 * Created by xianghiafeng on 2019/12/13.
 */
const express = require('express')
const app = express()
app.use(express.static(__dirname))
app.listen(5000)
const Server = require('ws').Server
const ws = new Server({port:8888})
ws.on('connection',function (socket) {
  socket.on('message',function (msg) {
    console.log(msg)
    socket.send('你好，我是服务端')
  })
})
console.log('server is listening on localhost:5000')
// Current Problems 
// socketserver 也問題 ,可能須更改為websocket
//client 端可傳出去 ， 但別的client 收不到


//import express 和 ws 套件
const express = require('express')
const SocketServer = require('ws').Server
// const WebSocket = require('ws');
// const WebSocketServer = WebSocket.Server;
const WebSocket = require('ws')
const uuidv4 = require('uuid').v4



//指定開啟的 port
const PORT = 5500

//創建 express 的物件，並綁定及監聽 5500 port ，且設定開啟後在 console 中提示
const server = express()
    .listen(PORT, () => console.log(`Listening on ${PORT}`))

//將 express 交給 SocketServer 開啟 WebSocket 的服務

const wss = new WebSocket.WebSocketServer({ server});

// const wss = new WebSocketServer({ port: 5500 });
// const wss = new WebSocketServer({ port: 5500 });

//當 WebSocket 從外部連結時執行

wss.on('connection', ws => {
    console.log('Client connected')
    const uuid = uuidv4()
    ws.uuid = uuid //判斷哪位用戶使用

    //表示用戶是誰
    const user = {
        context : 'user',
        uuid 
    }

    ws.send(JSON.stringify(user))

    //監聽
    ws.on('message', (message) => {
        const msg = JSON.parse(message)
        const newmsg = {
            context : 'message',
            uuid , 
            content : msg.content
        }
        //直接回傳至本端


        //目前可以執行 ， client端傳給server端，再從server端回傳給自己
        // ws.send(JSON.stringify(newmsg))

        //寄給以建立連線的client端

        //目前不能執行
        sendAllUser(newmsg)
        //顯示傳送端ID

    })

   

    ws.on('close', () => {
        console.log('Close connected')
    })
})

function sendAllUser(msg) {
    wss.clients.forEach(function (client) {
      // 已建立連線：並且排除自身
      if (client.readyState === WebSocket.OPEN && client.uuid !== msg.uuid) {
        client.send(JSON.stringify(msg));
      }
    });
  }
 //推播 (Server broadcast)
 module.exports = wss
 

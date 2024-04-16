//import express 和 ws 套件
const express = require('express')
const SocketServer = require('ws').Server
const uuid = require('uuid').v4

//指定開啟的 port
const PORT = 5500

//創建 express 的物件，並綁定及監聽 5500 port ，且設定開啟後在 console 中提示
const server = express()
    .listen(PORT, () => console.log(`Listening on ${PORT}`))

//將 express 交給 SocketServer 開啟 WebSocket 的服務
const wss = new SocketServer({ server })

//當 WebSocket 從外部連結時執行

wss.on('connection', ws => {
    console.log('Client connected')
    const uuid = uuidv4()
    ws.uuid = uuid //判斷哪位用戶使用

    ws.on('message', data => {
        //取得所有連接中的 client
        let clients = wss.clients

        //做迴圈，發送訊息至每個 client
        clients.forEach(client => {
            client.send(data.toString())
        })
    })

    ws.on('close', () => {
        console.log('Close connected')
    })
})
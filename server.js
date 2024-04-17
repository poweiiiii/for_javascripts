//import express 和 ws 套件
import { parse } from 'url';
const express = require('express')
const SocketServer = require('ws').Server
const uuidv4 = require('uuid').v4

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

    //表示用戶是誰
    const user = {
        context : 'user',
        uuid 
    }

    ws.send(JSON.stringify(user))

    //監聽
    ws.on('message', data => {
        //取得所有連接中的 client
        let clients = wss.clients

        //做迴圈，發送訊息至每個 client
        clients.forEach(client => {
            client.send(user)
        })
    })

    ws.on('close', () => {
        console.log('Close connected')
    })
})
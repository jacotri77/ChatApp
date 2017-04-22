const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get("/", function(req, res){
    res.sendFile(__dirname + '/client/public/index.html')
})

// app.get("/api", function(req, res){
//     res.json({
//         "foo":"bar"
//     })
// })

io.on('connection', function(socket){
    console.log("a user connected")
    socket.on('addMessage', function(message){
        io.emit('newMessage', message)
        console.log(message)
    })
})

io.on('connection', function(socket){
    socket.on('send-nickName', function(nickName){
        socket.nickName = nickName
        users.push(socket.nickName)
        socket.emit('send-nickName', nickName)
        console.log(users)
    })
})
server.listen(3001, function(){
    console.log('listening on port 3001')
})
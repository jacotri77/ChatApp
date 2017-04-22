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

const users = []
const messages = []

io.on('connection', function(socket){
    console.log("a user connected")

    socket.on('addUser', function(user){
        users.push({
            username: user,
            id: socket.client.conn.id
        })

        console.log(users)
        io.emit('newUser', user)
    })

    socket.on('addMessage', function(message){
        userId = socket.client.conn.id

        var date = new Date()
        var hour = date.getHours()
        var min = date.getMinutes()
        var sec = date.getSeconds()
        var suffix = 'am'

        if(min < 10){
            min = '0' + min
        }

        if(hour < 10){
            hour = '0' + hour
        }

        if(sec < 10){
            sec = '0' + sec
        }

        if(hour >= 12){
           suffix = 'pm'
        } else if(hour < 12 || hour === 24){
           suffix = 'am'
        }
        
        if(hour > 12) {
            hour = hour - 12
        }

        var timeStamp = hour + ':' + min + ':' + sec + ' ' + suffix

        console.log(timeStamp)

        io.emit('newMessage', message)
        console.log(message)
    })
})

// io.on('connection', function(socket){
//     socket.on('send-nickName', function(nickName){
//         socket.on('init', this.initialize)
//         socket.on('send:message', this.messageRecieve)
//         socket.on('user:join', this.userJoined)
//         socket.on('user:left', this.userLeft)
//         console.log(users)
//     })
// })
server.listen(3001, function(){
    console.log('listening on port 3001')
})
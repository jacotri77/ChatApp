const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const moment = require('moment')

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
    

    socket.on('addMessage', function(message, moment){
        userId: socket.client.conn.id
            io.emit('newMessage', message, moment)
                 console.log(message, moment)
       
     })
        moment().format("MMMM DD YYYY, hh mm ss a")
            console.log(moment)
})
    socket.on('addUser', function(user){
        user.push({
            username: user,
            id: socket.client.conn.id
        })
        
        io.emit('newUser', user)
            console.log(user)
 })

server.listen(3001, function(){
    console.log('listening on port 3001')
})


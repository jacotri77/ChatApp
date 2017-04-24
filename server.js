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

    socket.on('addUser', function(user){
        users.push({
            username: user,
            id: socket.client.conn.id

        })

        console.log(user)
        io.emit('newUser', user)
            
 })
    
    socket.on('addMessage', function(message){
        userId = socket.client.conn.id 
        moment().toString("MMMM DD YYYY, hh mm ss a")
            io.emit('newMessage', message)
                 console.log(message)
       
     })
        
})
server.listen(3001, function(){
    console.log('listening on port 3001')
})


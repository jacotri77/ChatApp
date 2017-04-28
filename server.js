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
const messages = []
const users = []



io.on('connection', function(socket){
  console.log("a user connected")
    socket.on('newMessage', function(message){
      console.log(message)
      io.emit('newMessage', message)
          }) 


      
     socket.on('disconnect', function(socket){
      console.log('a user disconnected')
      const index = users.indexOf(socket)
      users.splice(index, users)
      io.emit('disconnect', users)
      }) 

  })

server.listen(3001, function(){
    console.log('listening on port 3001')
})
    

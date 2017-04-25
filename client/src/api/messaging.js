import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('http://192.168.1.114:3001')


export function addUser(username) {
    socket.emit('addUser', username)
}

    socket.on('newUser', function(username){
        store.dispatch({
            type: 'ADD_USER',
            username
    })
})

export function addMessage(message, username) {
    socket.emit('addMessage', {
        message: message.message,
        username: message.username
    })
}

    socket.on('newMessage', function(message){
        store.dispatch({
            type: 'ADD_MESSAGE',
            message
    })
})


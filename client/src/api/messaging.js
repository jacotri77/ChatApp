import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('http://10.68.0.60:3001')

export function addMessage(message) {
    socket.emit('addMessage', message)
}

socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})

export function addUser(user) {
    socket.emit('addUser', user)
}

socket.on('newUser', function(user){
    store.dispatch({
        type: 'ADD_USER',
        user
    })
})
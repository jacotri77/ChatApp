import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('http://10.68.0.60:3001')
// const socket = io.connect('http://localhost:3001')

export function addUser(username){
    store.dispatch({
        type: 'ADD_USER',
        username
    })
}

export function addMessage(message) {
    socket.emit('newMessage', message)
}

socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})
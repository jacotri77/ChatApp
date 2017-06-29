import {createStore} from 'redux'
import messageReducer from './reducers/messaging'

const store = createStore(messageReducer)

export default store
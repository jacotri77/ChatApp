const initialState = {
    messages: [],
    username: '',
    userId: ''
}

export default function messageReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {...state, messages: [...state.messages, action.message]}
        case 'ADD_USER':
            return {...state, username: action.username}
        default:
            return state
    }
}


import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import todoReducer from './Reducers/todo'
import messageReducer from './Reducers/messages'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({ 
	todo: todoReducer, message: messageReducer 
})

export default createStore(
	reducer,
	composeWithDevTools(
			applyMiddleware(thunk) // this enables us to start using asynchronous actions in our reducers
	)
)
import { getTodos, createTodo } from '../lib/todoServices'
import { showMessage } from './messages'

const initialState = {
	todos: [],
	currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE'
export const TODO_ADD = 'TODO_ADD'
export const TODOS_LOAD = 'TODOS_LOAD'

// these functions return action objects
export const updateCurrent = value => ({ type: CURRENT_UPDATE, payload: value })
export const loadTodos = todos => ({ type: TODOS_LOAD, payload: todos})
export const addTodo = todo => ({ type: TODO_ADD, payload: todo })

export const fetchTodos = () => {
	// tldr we need this pattern for thunk to work its magic and let us perform async actions, aka our fetch 
	return (dispatch) => {
		dispatch(showMessage('Loading Todos...'))
		getTodos()
			.then(todos => dispatch(loadTodos(todos)))
 }
}

export const saveTodo = name => {
	return (dispatch) => {
		dispatch(showMessage('Saving todo...'))
		createTodo(name)
			.then(res => dispatch(addTodo(res)))
	}
}

// reducer functions are synchronous
export default (state = initialState, action) => {
	switch (action.type) {
		case TODOS_LOAD:
			return { ...state, todos: action.payload}

		case TODO_ADD:
			return { ...state, currentTodo: '', todos: state.todos.concat(action.payload)}

		case CURRENT_UPDATE:
			return { ...state, currentTodo: action.payload }
			
			default:
		return state
	}
}

// for asynchronous actions, we need to use middleware
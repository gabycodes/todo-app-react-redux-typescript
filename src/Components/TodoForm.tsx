import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCurrent, saveTodo } from '../Reducers/todo'

interface FormProps {
	currentTodo: string
	updateCurrent(value: string): any
	saveTodo(currentTodo: string): any
}


class TodoForm extends Component<FormProps> {
	handleInputChange = (event: any) => {
		const value = event.target.value
		this.props.updateCurrent(value)
	}

	handleSubmit = (event: any) => {
		event.preventDefault()
		this.props.saveTodo(this.props.currentTodo)
	}

	render() {
		const { currentTodo } = this.props

		return (
			<form action="" onSubmit={this.handleSubmit}>
				<input 
					type="text"
					onChange={this.handleInputChange}
					value={currentTodo}
				/>
			</form>
		)
	}
}

export default connect(
	(state: any) => ({ currentTodo: state.todo.currentTodo }),
	{updateCurrent, saveTodo}
)(TodoForm)
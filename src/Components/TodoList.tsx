import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../Reducers/todo'

interface TodoItemProps {
	name: string
	isComplete: boolean
}

const TodoItem = (props: TodoItemProps) => (
	<li>
		<input type="checkbox" name={props.name} defaultChecked={props.isComplete} />
		{props.name}
	</li>
)

interface TodoListProps {
	fetchTodos(): any
	todos: Array<any>
}

class TodoList extends Component<TodoListProps> {
	componentDidMount() {
		this.props.fetchTodos()
	}

	render() {
		return (
			<div className="todoList">
				<ul>
						{this.props.todos.map((todo) => <TodoItem {...todo} key={todo.id} />)}
				</ul> 
			</div>
		)
	}
}

export default connect(
	(state: any) => ({todos: state.todo.todos}),
	{fetchTodos}
)(TodoList)
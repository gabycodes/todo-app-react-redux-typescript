import React, { Component } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'
import Message from './Components/Message'
// import { bindActionCreators } from 'redux'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='todoApp'>
          <Message message='hello!'/>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

// --  mapStateToProps()  --
// mapStateToProps() is a function that accepts the entire state and returns an object
// that represents a subset of the state that we want to pass into our component
// tldr it hydrates our component with the state via props
// const mapStateToProps = (state) => state

// -- bindActionCreators() --
// // const todoChangeHandler = value => store.dispatch(updateCurrent(value))
// we use bindActionCreators() so we don't need to do this^ for every action
// const actions = bindActionCreators({ updateCurrent }, store.dispatch)

// --  mapDispatchToProps() --
// const mapDispatchToProps = (dispatch) => bindActionCreators({ updateCurrent }, dispatch)

// this connects our App to our Provider
// const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
// export default ConnectedApp

// -- connect() --
// connect() takes two arguments, mapStateToProps and mapDispatchToProps
// We can use the following shorthand that removes the need for declaring "mapStateToProps" and "mapDispatchToProps",
// and the need for importing and using bindActionCreators()
//
// export default connect(
//   (state) => state, // mapping state to props
//   {updateCurrent} // mapping action dispatchers to props
// )(App)
// This^ is ultimately the same as using `const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)`


// Refactor: wrapping our whole App means that whenever state is updated, all of our child components are rerendered
// That's not very efficient. Instead, we wrapped our TodoForm and TodoList components separately so that they
// only rerender when state that matters to them changes. We can now remove connect() from this file since App
// doesn't need a direct connection to redux. So,
export default App
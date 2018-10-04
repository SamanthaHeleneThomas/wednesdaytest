import React, { Component } from 'react';
import Todo from './Todo';


class App extends Component {

  state = { todos: [

    { id: 1, name: 'red', complete: true };
    { id: 7, name: 'yellow', complete: true };
    { id: 2, name: 'blue', complete: false };

  ] }
 
  addItem =(name) => {
    const {todos} = this.state
    const todo = {id: Math.random(), name, complete: boolean}
 
  }


  render() {
    const { todos } = this.state;
 
    return (
      <ul>
      { todos.map( todo =>
           <li key={todo.id}>{todo.name}</li>
         )
      }
    </ul>
    );
  }
}

export default App;

import React from 'react'


class Todo extends React.Component {
    myInput = null;

    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.myInput.value)
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input ref={ n => this.myInput = n }  required placeholder='todo'/>
        </form>
      )
    }
  }
  

export default Todo;
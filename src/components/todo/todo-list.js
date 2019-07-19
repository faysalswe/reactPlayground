import React from 'react';
import TodoItem from './todo-item';
class TodoList extends React.Component {
  state = {
    listOfTodo : [
      {
        id: 1,
        title: "wash cloth",
        isCompleted: true
      },
      {
        id: 1,
        title: "complete react",
        isCompleted: true
      },
      {
        id: 1,
        title: "experiment db migration in team environment",
        isCompleted: false
      },
      {
        id: 1,
        title: "buy headfone, toy",
        isCompleted: false
      }
    ]
  }
  render() {
    console.log(this.state.listOfTodo);
    
    return(
    <div>
      <h3> Todo List </h3>
      <div>
        { this.state.listOfTodo.map((todo) => <TodoItem todo={todo} />) }
      </div>
    </div>
    );
  }
}

export default TodoList;

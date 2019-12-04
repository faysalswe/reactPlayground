import React from 'react';
import TodoItem from './todo-item';
import TodoForm from './todo-form';
// import PropTypes from 'prop-types';

class TodoList extends React.Component {
  state = {
    listOfTodo : [
      {
        id: 1,
        title: "need to do nested route (react)",
        isCompleted: true
      },
      {
        id: 2,
        title: "multiple component data share",
        isCompleted: true
      },
      {
        id: 3,
        title: "experiment db migration in team environment",
        isCompleted: false
      },
      {
        id: 4,
        title: "buy headfone, toy",
        isCompleted: false
      },
      {
        id: 5,
        title: "from submit and validation",
        isCompleted: false
      },
      {
        id: 6,
        title: "Styled component",
        isCompleted: false
      },
      {
        id: 7,
        title: "detail about react-route-dom properties",
        isCompleted: false
      }
    ]
  }

  handleIsCompleted = (id) => {
    this.setState({
      listOfTodo: this.state.listOfTodo.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    })  
  }

  removeTodo = (id) => {
    const todos = this.state.listOfTodo.filter(todo => todo.id !== id);
    this.setState({
      listOfTodo: todos
    })
  }

  addTodo = (title) => {
    const newId = this.state.listOfTodo.length + 1;
    const newTodo = {
      title,
      id : newId,
      isCompleted : false
    }
    this.setState({ listOfTodo: [...this.state.listOfTodo, newTodo]});
    console.log(title);
    
  }

  filterTodo = (titleKeyword) => {
    const todos = this.state.listOfTodo.filter(x => x.title.toLocaleLowerCase().includes(titleKeyword.toLocaleLowerCase()));
    this.setState({
      listOfTodo: todos
    })
  }
  render() {
    return(
    <div>
      <TodoForm addTodo={this.addTodo} filterTodo={this.filterTodo} />
      <div>
        { this.state.listOfTodo.map(
          (todo) => 
          <TodoItem key={todo.id} todo={todo} 
          handleIsCompleted={this.handleIsCompleted}
          removeTodo={this.removeTodo} />
        )}
      </div>
    </div>
    );
  }
}
// TodoList.propTypes = {
//   listOfTodotodo: PropTypes.array.isRequired
// }

export default TodoList;

import React from 'react';
import './App.css';
import TodoApp from './todo/todo-app';

var todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "Go shopping", done: true});
todoItems.push({index: 3, value: "buy flowers", done: true});

function App() {
  return (
    <div className="App">
    <TodoApp initItems={todoItems}/>
    </div>
  );
}

export default App;

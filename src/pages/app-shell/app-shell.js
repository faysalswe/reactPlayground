import React from 'react';
import './app-shell.css';
import TodoList from '../../components/todo/todo-list';

function AppShell() {
  return (
    <div className="container">
      <TodoList/>
    </div>
  );
}

export default AppShell;

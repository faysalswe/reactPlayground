import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app-shell.css';
import TodoList from '../../components/todo/todo-list';
import About from '../about';
import Header from '../../components/layout/header';

function AppShell() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/"
          render={props => (
            <React.Fragment>
              <TodoList />
            </React.Fragment>
          )} />

        <Route path="/about"
          render={props => (
            <React.Fragment>
              <About />
            </React.Fragment>
          )} />

      </div>
    </Router>
  );
}

export default AppShell;

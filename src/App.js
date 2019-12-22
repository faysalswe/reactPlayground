import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import EmployeeForm from './components/EmployeeForm';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <EmployeeForm/>
      </div>
    );
  }
}


export default App;

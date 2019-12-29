import React from 'react';
import './App.css';
import EmployeeForm  from './components/employee/employee.component';


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

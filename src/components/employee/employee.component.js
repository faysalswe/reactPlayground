import React from 'react';
import './employee.styles.css';
import {Mobile} from '../mobile/mobile.component';    
// import { Must, Min, Max } from '../../validator';

export default class EmployeeForm extends React.Component {
  constructor() {
    super();
    this.state = {
      employee: {
        id: 0,
        fullName: '',
        email: '',
        country: '',
        isHeadOffice: false,
        mobiles: [this.initMobileNumber()],
      }
    };
  }

  initMobileNumber() { return { id: 0, mobileNumber: '', operator: 'airtel', isPrimaryNumber: false }; }

  onChange = e => {
    const employee = {...this.state.employee};
    //employee.mobiles = [...employee.mobiles, this.initMobileNumber(id)];
    employee[e.target.name] = e.target.value;
    this.setState({ employee });
    //this.setState({ [e.target.name]: e.target.value });
    console.log("employee change", employee);
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit", this.state.employee);

    fetch("my-post-url", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.employee)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  // #region mobile
  newMobileNumber = (e) => {
    console.log("newMobileNumber");
    
    e.preventDefault();
    const employee = { ...this.state.employee };
    employee.mobiles = [...employee.mobiles, this.initMobileNumber()];
    this.setState({ employee });
  }

  deleteMobileNumber = (index, e) => {
    e.preventDefault();
    if (this.state.employee.mobiles.length < 1) {
      return;
    }
    const mobiles = [...this.state.employee.mobiles];
    mobiles.splice(index, 1);

    this.setState({ employee: { mobiles } });
  }

  onChangeMobile = (index, event) => {
    const employee = { ...this.state.employee };
    employee.mobiles[index][event.target.name] = event.target.value;
    this.setState({ employee });
    
    console.log("mobile change", employee, index, event.target.name, event.target.value);
  }
// #endregion
  render() {
    const { fullName, email, country, isHeadOffice, mobiles } = this.state.employee;
    return (
      <div>
        <h3> Employee Form </h3>
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <label htmlFor="fullName">Full name</label>
            <input 
            type="text" 
            name="fullName" 
            className="form-control" 
            id="fullName"
            value={fullName}
            onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input 
            type="email" 
            name="email" 
            className="form-control" 
            id="email" 
            aria-describedby="emailHelp" 
            value={email}
            onChange={this.onChange}/>
            <small 
            id="emailHelp" 
            className="form-text text-muted"
            >We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input 
            type="text" 
            name="country" 
            className="form-control" 
            id="country" 
            value={country}
            onChange={this.onChange}/>
          </div>

          <div className="form-group form-check">
            <input 
            type="checkbox" 
            name="isHeadOffice" 
            className="form-check-input" 
            id="isHeadOffice"
            value={isHeadOffice}
            onChange={this.onChange}/>
            <label 
            className="form-check-label" 
            htmlFor="isHeadOffice"> 
            Head office </label>
          </div>

          <div>
          {
            mobiles.map((mobile, index) => 
              <Mobile 
                key={index}
                index={index}
                length={mobiles.length}
                mobile={mobile} 
                newMobileNumber={this.newMobileNumber} 
                deleteMobileNumber={this.deleteMobileNumber.bind(this, index)}
                handleMobileChange={this.onChangeMobile.bind(this, index)}
              />
            )
          }
          </div>
          <button className="btn btn-primary"> Save </button>
        </form>
      </div>
    );
  }
}
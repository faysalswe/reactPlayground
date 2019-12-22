import React from 'react';
import './EmployeeForm.css';
import { Must, Min, Max } from '../validator';

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
        validation: null
      },
       operators : [
        { "key": "airtel", "value": "Airtel" },
        { "key": "robi", "value": "Robi" },
        { "key": "gp", "value": "Grameen Phone" },
        { "key": "tk", "value": "taletalk" }]
    };
  }

  initMobileNumber() { return { id: 0, mobileNumber: '', operator: 'airtel', isPrimaryNumber: false }; }

  newMobileNumber = (e) => {
    e.preventDefault();
    const employee = {...this.state.employee};
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

    this.setState( { employee: { mobiles }});
  }

  onChange = e => {
    const employee = {...this.state.employee};
    //employee.mobiles = [...employee.mobiles, this.initMobileNumber(id)];
    employee[e.target.name] = e.target.value;
    this.setState({ employee });
    //this.setState({ [e.target.name]: e.target.value });
    console.log("employee change", employee);

    this.setState({validation: "validation message"});
  }


  onChangeMobile = (index, event) => {
    const employee = {...this.state.employee};
    employee.mobiles[index][event.target.name] = event.target.value;
    this.setState({ employee });
    console.log("mobile change", employee, index, event.target.name, event.target.value);
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit", this.state.employee);
    this.httpRequest("GET", "https://my-json-server.typicode.com/typicode/demo/posts", (res, err) => { console.log(res, err) });
  }

  httpRequest(verb, url, callback) {
    var args = Array.prototype.slice.call(arguments, 3);
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        console.error("The request for " + url + " timed out.");
    };
    xhr.onload = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            callback.apply(xhr, args);
        } else {
            console.error(xhr.statusText);
        }
      }
    };
    xhr.open(verb, url, true);
    xhr.timeout = 2000;
    xhr.send(null);
  }
  render() {
    const { fullName, email, country, isHeadOffice, mobiles, validation } = this.state.employee;
    return (
      <div>
        <h3> Employee Form </h3>
        <form  onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full name</label>
            <input 
            type="text" 
            name="fullName" 
            className="form-control" 
            id="fullName"
            value={fullName}
            // onChange={this.onChange.bind(this, [required, Min(3), Max(6)])}
            onChange={(e) => { this.onChange(e); 
              const message = `${Min(e.target.value, 3)}, ${Must(e.target.value)} ,${Max(e.target.value, 6)}`;
              console.log("message",  message);
              this.setState({validation: message});
              }
            }
            />
            { validation ?
              <small className="">
                validation
              </small> : null
            }
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
              mobiles.map((val, index) => {
                return (
                  <div key={index} className="form-row align-items-center mb-3">
                    <div className="col-auto">
                      <label className="sr-only" htmlFor="mobileNumber">Username</label>
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <div className="input-group-text">+880</div>
                        </div>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="mobileNumber" 
                        name="mobileNumber"
                        placeholder="1675996843"
                        value={val.mobileNumber}
                        onChange={this.onChangeMobile.bind(this, index)}/>
                      </div>
                    </div>

                    <div className="col-auto">
                      <label className="sr-only" htmlFor="operator">Operator</label>
                      <div className="input-group ">
                        <select 
                        id="operator" 
                        name="operator"
                        className="form-control"
                        value={val.operator}
                        onChange={this.onChangeMobile.bind(this, index)}>
                          {this.state.operators.map(
                            (operator) => 
                            <option key={operator.key} value={operator.key}>
                               {operator.value} 
                            </option>)}
                        </select>
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="form-check ">
                        <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="isPrimaryNumber"
                        name="isPrimaryNumber"
                        value={val.isPrimaryNumber}
                        onChange={this.onChangeMobile.bind(this, index)}/>
                        <label 
                        className="form-check-label" 
                        htmlFor="autoSizingCheck">
                          Primary number
                        </label>
                      </div>
                    </div>

                    <div className="col-auto">
                      {
                        ((mobiles.length - 1) === index) ?
                          <div>
                            <button className="btn btn-success" onClick={this.newMobileNumber}> + </button>
                            {
                            (mobiles.length !== 1) ?
                              <button className="btn btn-danger" onClick={this.deleteMobileNumber.bind(this, index)}>&times;</button>
                              : ''
                            }
                          </div>
                          :
                          <button className="btn btn-danger" onClick={this.deleteMobileNumber.bind(this, index)}> &times; </button>
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
          <button className="btn btn-primary"> Save </button>
        </form>
      </div>
    );
  }
}
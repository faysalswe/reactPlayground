import React from 'react'


export const Mobile = ({mobiles, newMobileNumber, deleteMobileNumber, handleMobileChange }) => {


  const operators = [
    { "key": "airtel", "value": "Airtel" },
    { "key": "robi", "value": "Robi" },
    { "key": "gp", "value": "Grameen Phone" },
    { "key": "tk", "value": "taletalk" }];

    return (
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
                        placeholder="01675996843"
                        value={val.mobileNumber}
                        onChange={handleMobileChange.bind(this, index)}/>
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
                        onChange={handleMobileChange.bind(this, index)}>
                          {operators.map(
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
                        onChange={handleMobileChange.bind(this, index)}/>
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
                            <button className="btn btn-success" onClick={newMobileNumber}> + </button>
                            {
                            (mobiles.length !== 1) ?
                              <button className="btn btn-danger" onClick={deleteMobileNumber.bind(this, index)}>&times;</button>
                              : ''
                            }
                          </div>
                          :
                          <button className="btn btn-danger" onClick={deleteMobileNumber.bind(this, index)}> &times; </button>
                      }
                    </div>
                  </div>
                )
              })
            }
        </div>
    )
}

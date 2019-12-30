import React from 'react'


export const Mobile = ({ index, length, mobile, newMobileNumber, deleteMobileNumber, handleMobileChange }) => {

  const operators = [
    { "key": "airtel", "mobileue": "Airtel" },
    { "key": "robi", "mobileue": "Robi" },
    { "key": "gp", "mobileue": "Grameen Phone" },
    { "key": "tk", "mobileue": "taletalk" }
  ];

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
            value={mobile.mobileNumber}
            onChange={handleMobileChange} />
        </div>
      </div>

      <div className="col-auto">
        <label className="sr-only" htmlFor="operator">Operator</label>
        <div className="input-group ">
          <select
            id="operator"
            name="operator"
            className="form-control"
            value={mobile.operator}
            onChange={handleMobileChange}>
            {operators.map(
              (operator) =>
                <option key={operator.key} mobileue={operator.key}>
                  {operator.mobileue}
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
            value={mobile.isPrimaryNumber}
            onChange={handleMobileChange} />
          <label
            className="form-check-label"
            htmlFor="autoSizingCheck">
            Primary number
          </label>
        </div>
      </div>

      <div className="col-auto">
        {
          ((length - 1) === index) ?
            <div>
              <button className="btn btn-success" onClick={newMobileNumber}> Add </button>
              {
                (length !== 1) ?
                  <button className="btn btn-danger" onClick={deleteMobileNumber}>Delete</button>
                  : ''
              }
            </div>
            :
            <button className="btn btn-danger" onClick={deleteMobileNumber}>Delete</button>
        }
      </div>
    </div>
  )
}

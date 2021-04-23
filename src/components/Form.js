import React from "react";

export default function Form({ search, handleInputChange }) {
  return (
    <div>
      <div className="input-group mb-4">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Employee Search
          </span>
        </div>
        <div className="col-sm-4">
          <input
            name="search"
            type="text"
            className="form-control"
            id="search"
            onChange={handleInputChange}
            value={search}
            placeholder="Enter employee first name"
          ></input>
        </div>
      </div>
    </div>
  );
}

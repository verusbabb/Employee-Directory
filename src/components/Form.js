import React from "react";

export default function Form({ search, handleInputChange }) {
  return (
    <div>
      <div className="input-group mb-4">
        <div className="col-sm-4">
          <input
            name="search"
            type="text"
            className="form-control"
            id="search"
            onChange={handleInputChange}
            value={search}
            placeholder="Search employee first name"
          ></input>
        </div>
      </div>
    </div>
  );
}

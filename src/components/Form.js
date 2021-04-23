import React from "react";

export default function Form({ search, handleInputChange }) {
  return (
    <form>
      <div className="form-group">
        <label for="search">search</label>
        <input
          name="search"
          type="text"
          className="form-control"
          id="search"
          onChange={handleInputChange}
          value={search}
        ></input>
      </div>
    </form>
  );
}

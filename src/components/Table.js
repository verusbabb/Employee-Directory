import React from "react";
import Tablebody from "./Tablebody";
import moment from "moment";

function Table({ employeeResult, sortBy }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead className="bg-info">
          <tr>
            <th scope="col">Picture</th>
            <th onClick={() => sortBy("name")}>Name</th>
            <th onClick={() => sortBy("email")}>Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        {employeeResult.map((employee, index) => (
          <Tablebody
            key={index}
            picture={employee.picture.thumbnail}
            nameFirst={employee.name.first}
            nameLast={employee.name.last}
            email={employee.email}
            dob={moment(employee.dob.date).format("L")}
          />
        ))}
      </table>
    </div>
  );
}

export default Table;

import React from "react";
import Tablebody from "./Tablebody";
import moment from "moment";

function Table({ employeeResult, sortName, sortEmail, sortDOB }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead className="bg-info">
          <tr>
            <th scope="col">Picture</th>
            <th scope="col" onClick={() => sortName("name.first")}>
              Name
            </th>
            <th scope="col" onClick={() => sortEmail("email")}>
              Email
            </th>
            <th scope="col" onClick={() => sortDOB("dob.date")}>
              DOB
            </th>
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

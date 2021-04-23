import React, { useState, useEffect } from "react";
import API from "../Utils/API";
import Tablebody from "./Tablebody";
import moment from "moment";

function Table() {
  const [employeeResult, setEmployeeResult] = useState();

  // When the component mounts, load the RANDOM EMPLOYEES to be displayed
  // componentDidMount() {
  //   loadRandomEmployees();
  // };

  useEffect(() => {
    API.getRandomEmployees().then((res) => {
      setEmployeeResult(res.data.results);

      console.table(employeeResult);
    });
  }, []);

  // render() {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead className="bg-primary text-white ">
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
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

import React, { Component } from "react";
import API from "../Utils/API";
import Tablebody from "./Tablebody";
import moment from "moment";
// import Tableheader from "./Tableheader";
// import Tablebody from "./Tablebody";
// import Tableheader from "./Tableheader";

class Table extends Component {
  state = {
    employeeResult: [],
  };

  // When the component mounts, load the RANDOM EMPLOYEES to be displayed
  componentDidMount() {
    this.loadRandomEmployees();
  }

  loadRandomEmployees = () => {
    API.getRandomEmployees().then((res) => {
      this.setState({ employeeResult: res.data.results });

      console.table(this.state.employeeResult);
    });
  };

  render() {
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
          {this.state.employeeResult.map((employee, index) => (
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
}

export default Table;

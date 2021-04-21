import React, { Component } from "react";
import API from "../Utils/API";
import Tablebody from "./Tablebody";
// import Tableheader from "./Tableheader";
// import Tablebody from "./Tablebody";
// import Tableheader from "./Tableheader";

class Table extends Component {
  state = {
    employeeResult: [],
    // picture: "",
    // firstName: "",
    // lastName: "",
    // phone: "",
    // email: "",
    // DOB: "",
  };

  // When the component mounts, load the RANDOM EMPLOYEES to be displayed
  componentDidMount() {
    this.loadRandomEmployees();
    // console.log(this.state);
  }

  loadRandomEmployees = () => {
    API.getRandomEmployees().then((res) => {
      this.setState({ employeeResult: res.data.results });

      console.table(this.state.employeeResult);
      console.log(this.state.employeeResult);

      // logging state properties by individual properties
      //   console.log(this.state.firstName);
      //   console.log(this.state.picture);
    });
  };

  // renderTableData()

  render() {
    // INSERT RETURN CODE HERE
    return (
      <div>
        {this.state.employeeResult.map((employee, index) => (
          <Tablebody
            key={index}
            nameFirst={employee.name.first}
            nameLast={employee.name.last}
          />
        ))}
      </div>
    );
  }
}

export default Table;

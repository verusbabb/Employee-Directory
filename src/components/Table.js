import React, { Component } from "react";
import API from "../Utils/API";
// import Tablebody from "./Tablebody";
// import Tableheader from "./Tableheader";

class Table extends Component {
  state = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
  };

  // When the component mounts, load the RANDOM EMPLOYEES to be displayed
  componentDidMount() {
    this.loadRandomEmployees();
    // console.log(this.state);
  }

  loadRandomEmployees = () => {
    API.getRandomEmployees().then((res) => {
      this.setState({ firstName: res.data.results[0].name.first });
      this.setState({ lastName: res.data.results[0].name.last });
      this.setState({ gender: res.data.results[0].gender });
      this.setState({ email: res.data.results[0].email });
      console.log(this.state.firstName + " " + this.state.lastName);
      console.log(this.state.gender);
      console.log(this.state.email);
    });
  };

  // renderTableData()

  render() {
    // INSERT RETURN CODE HERE
    return (
      <div>
        <h1>Employee Directory!</h1>
      </div>
    );
  }
}

export default Table;

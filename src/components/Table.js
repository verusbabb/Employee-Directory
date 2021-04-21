import React, { Component } from "react";
import API from "../Utils/API";
import Tablebody from "./Tablebody";
import Tableheader from "./Tableheader";
// import Tablebody from "./Tablebody";
// import Tableheader from "./Tableheader";

class Table extends Component {
  state = {
    picture: "",
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
      console.table(res.data.results);
      this.setState(res.data.results);
      this.setState({ picture: res.data.results[0].picture.thumbnail });
      this.setState({ firstName: res.data.results[0].name.first });
      this.setState({ lastName: res.data.results[0].name.last });
      this.setState({ gender: res.data.results[0].gender });
      this.setState({ email: res.data.results[0].email });

      // Logging state properties for first index value for "state"
      console.log(this.state[0].name.first);
      console.log(this.state[0].name.last);

      // logging state properties by individual properties
      console.log(this.state.firstName);
      console.log(this.state.picture);
    });
  };

  // renderTableData()

  render() {
    // INSERT RETURN CODE HERE
    return (
      <div>
        <Tableheader columnOne={["First Name", "Last Name"]} />
        <Tablebody results={[this.state.firstName, this.state.lastName]} />
      </div>
    );
  }
}

export default Table;

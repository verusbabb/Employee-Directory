import React, { Component } from "react";
import API from "../Utils/API";
// import Tablebody from "./Tablebody";

class Table extends Component {
  state = {
    data: [],
  };

  // When the component mounts, load the RANDOM EMPLOYEES to be displayed
  componentDidMount() {
    this.loadRandomEmployees();
    // console.log(this.state);
  }

  loadRandomEmployees = () => {
    API.getRandomEmployees().then((res) => {
      this.setState(res.data.results);
      console.table(this.state);
    });
  };

  //   renderTableData() {
  //     return this.state.results.map((result) => {
  //       return (
  //         <tr>
  //           <td>{email}</td>
  //           <td>{gender}</td>
  //         </tr>
  //       );
  //     });
  //   }

  render() {
    // INSERT RETURN CODE HERE
    return (
      <div>
        <h3>data table</h3>
        {/* {this.state.results.map((result) => (
          <Tablebody email={result.email} gender={result.gender} />
        ))} */}
      </div>
    );
  }
}

export default Table;

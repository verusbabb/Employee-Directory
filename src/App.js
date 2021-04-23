import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Table from "./components/Table";
import Form from "./components/Form";
import API from "./Utils/API";

function App() {
  const [employeeResult, setEmployeeResult] = useState([]);
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    API.getRandomEmployees().then((res) => {
      setEmployeeResult(res.data.results);

      console.table(employeeResult);
    });
  };

  return (
    <div className="row">
      <div className="container">
        <div class="jumbotron text-center bg-info">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">
            View a list of all employees, sort employees by name, or search for
            employees by first name.
          </p>
        </div>
        <Form search={search} handleInputChange={handleInputChange} />
        <Table
          employeeResult={employeeResult.filter(function (employee) {
            return employee.name.first
              .toUpperCase()
              .includes(search.toUpperCase());
          })}
        />
      </div>
    </div>
  );
}

export default App;

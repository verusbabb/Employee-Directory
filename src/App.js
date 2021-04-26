import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import API from "./Utils/API";

function App() {
  const [employeeResult, setEmployeeResult] = useState([]);
  const [search, setSearch] = useState("");
  const [gettingData, setGettingData] = useState(true);
  const [dataSort, setDataSort] = useState(false);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    getEmployees();
    console.log(employeeResult);
    setGettingData(false);

    if (gettingData) {
      getEmployees();
    }
  }, []);

  const getEmployees = () => {
    API.getRandomEmployees().then((res) => {
      setEmployeeResult(res.data.results);
    });
  };

  const compareBy = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  };

  const sortBy = (key) => {
    dataSort
      ? setEmployeeResult((prevData) => [...prevData.sort().reverse()])
      : setEmployeeResult((prevData) => [...prevData.sort(compareBy(key))]);
    setDataSort(!dataSort);
  };

  return (
    <div className="row">
      <div className="container">
        <div className="jumbotron text-center bg-info">
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
          sortBy={sortBy}
          // sortEmail={sortByEmail}
          // sortDOB={sortByDOB}
        />
      </div>
    </div>
  );
}

export default App;

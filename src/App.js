import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Table from "./components/Table";

function App() {
  return (
    <div className="row">
      <div className="container">
        <h1 className="text-center">Employee Directory</h1>
        <Table />
      </div>
    </div>
  );
}

export default App;

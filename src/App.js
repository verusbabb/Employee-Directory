import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Table from "./components/Table";

function App() {
  return (
    // <Router>
    <div>
      <h1>Employee Directory</h1>
      <Table />
    </div>

    // </Router>
  );
}

export default App;

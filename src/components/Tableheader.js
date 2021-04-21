import React from "react";

function Tableheader(props) {
  return (
    <div>
      <th>{props.columnFirstName}</th>
      <th>{props.columnLastName}</th>
    </div>
  );
}

export default Tableheader;

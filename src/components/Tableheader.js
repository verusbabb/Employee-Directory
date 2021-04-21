import React from "react";

function Tableheader(props) {
  return (
    <div>
      <th>{props.header1}</th>
      <th>{props.header2}</th>
    </div>
  );
}

export default Tableheader;

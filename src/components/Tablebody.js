import React from "react";

function Tablebody(props) {
  return (
    <tbody className="table-hover">
      <tr className="bg-light">
        <td>
          <img src={props.picture}></img>
        </td>
        <td>{props.nameFirst + " " + props.nameLast}</td>
        <td>{props.email}</td>
        <td>{props.dob}</td>
      </tr>
    </tbody>
  );
}

export default Tablebody;

import React from "react";

function Tablebody(props) {
  return (
    <tbody className="table-hover">
      <tr className="bg-light">
        <td>
          <img src={props.picture}></img>
        </td>
        <td>{props.nameFirst + " " + props.nameLast}</td>
        <td>
          <a href={"mailto:" + props.email}>{props.email}</a>
        </td>
        <td>{props.dob}</td>
      </tr>
    </tbody>
  );
}

export default Tablebody;

//testing

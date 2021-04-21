import React from "react";

function Tablebody(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{props.email}</td>
            <td>{props.gender}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tablebody;

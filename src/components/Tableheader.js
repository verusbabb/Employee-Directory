import React from "react";

function Tableheader(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{props.gender}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tableheader;

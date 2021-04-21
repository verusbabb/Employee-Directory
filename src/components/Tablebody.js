import React from "react";

function Tablebody(props) {
  return (
    <tr>
      {props.results.map(result => (
        <td key={result}>
          <img alt="Dog" src={result} className="img-fluid" />
        </td>
    </tr>
  );
}

export default Tablebody;

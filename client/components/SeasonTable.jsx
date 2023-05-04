import React, { useContext } from "react";
import { Context } from "./Context";

function SeasonTable(props) {
  const { defaultYear, tableResults } = useContext(Context);

  return (
    <div className="table-container">
      <div></div>
      <h3 className="table-title">{defaultYear} Table</h3>
      <table className="table-grid">
        <thead className="table-header">
          <tr>
            <td>Team</td>
            <td>Pld</td>
            <td>Pts</td>
            <td>Win</td>
            <td>Draw</td>
            <td>Loss</td>
            <td>GF</td>
            <td>GA</td>
            <td>+/-</td>
          </tr>
        </thead>
        {/* this will render dynamically and each team needs to be a link */}
        <tbody className="table-body">{tableResults}</tbody>
      </table>
      <p className="footnote">
        Pld = games played, Win = 3pts, Draw = 1pt, GF = goals for, GA = goals
        against, +/- = goal differential
      </p>
    </div>
  );
}

export default SeasonTable;

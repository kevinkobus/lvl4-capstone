import React from "react";

{
  /* map through the selectedSeason array in state to render the teams */
}

function SeasonTable() {
  return (
    <div className="table-container">
      <h3 className="table-title">???? - ???? Table</h3>
      <table className="table-grid">
        <thead className="table-header">
          <tr className="table-header-row">
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
        <tbody className="table-body">
          <tr className="table-body-row">
            <td>Arsenal</td>
            <td>33</td>
            <td>90</td>
            <td>30</td>
            <td>4</td>
            <td>4</td>
            <td>100</td>
            <td>45</td>
            <td>55</td>
          </tr>
        </tbody>
      </table>
      <p>Pld = games played, Win = 3pts, Draw = 1pt, GF = goals for, GA = goals against, +/- = goal differential</p>
    </div>
  );
}

export default SeasonTable;

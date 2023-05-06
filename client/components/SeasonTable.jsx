import React, { useContext } from "react";
import { DataContext } from "./DataContext";

function SeasonTable(props) {
  const { table } = useContext(DataContext);
  // console.log(table)

  const tableResults = table.map((teams, index) => {
    return (
      <tr key={index} className="table-row">
        <td id={teams.team.id}>{teams.team.name}</td>
        <td>{teams.all.played}</td>
        <td>{teams.points}</td>
        <td>{teams.all.win}</td>
        <td>{teams.all.draw}</td>
        <td>{teams.all.lose}</td>
        <td>{teams.all.goals.for}</td>
        <td>{teams.all.goals.against}</td>
        <td>{teams.goalsDiff}</td>
      </tr>
    );
  });
  // console.log(tableResults)

  return (
    <div className="table-container">
      <h3 className="table-title"> Table</h3>
      <table className="table-grid">
        <thead className="table-header">
          <tr className="table-row">
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
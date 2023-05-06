import React, { useContext } from "react";
import { DataContext } from "./DataContext";

function Team(props) {
  
  const { teamInfoResults } = useContext(DataContext);

  return (
      <div className="team-container">
        <h2 className="team-name">?TeamName?</h2>
        <img src="" alt="team crest" className="team-crest" />
        <h3 className="roster-title">Roster</h3>
        <table className="roster-grid">
        <thead className="roster-header">
          <tr className="roster-header-row">
            <td>Player</td>
            <td>Age</td>
            <td>Number</td>
            <td>Position</td>
          </tr>
        </thead>
        {/* this will render dynamically and each team needs to be a link */}
        <tbody className="roster-body">
          <tr className="roster-body-row">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      </div> 
  )
}

export default Team
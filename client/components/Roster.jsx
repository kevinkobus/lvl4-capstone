import React, { useContext } from "react";
import { DataContext } from "./DataContext";

function Roster(props) {
  const { teamInfo, rosterInfo } = useContext(DataContext);
  // console.log(rosterInfo);
  // console.log(teamInfo)

  // const rosterTeam = teamInfo.map((team, index) => {
  // return (
  // <h1 className="team-name">{}</h1>
  // <img src={} alt="team crest" className="crest-image" />
  // )
  // })

  const rosterResults = rosterInfo.map((player, index) => {
    return (
      <tr key={index}>
        <td id={player.id}>{player.name}</td>
        <td>{player.age}</td>
        <td>{player.number}</td>
        <td>{player.position}</td>
      </tr>
    );
  });

  return (
    <div className="roster-container">
      {/* {} */}
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
        <tbody className="roster-body">{rosterResults}</tbody>
      </table>
    </div>
  );
}

export default Roster;

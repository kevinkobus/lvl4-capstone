import React, { useContext } from "react";
import { DataContext } from "./DataContext";

function RosterDropdown(props) {
  const { table } = useContext(DataContext);
  //   console.log(table)

  // mapping through table to pull out the teams
  const teamArr = table.map((teams) => teams.team.name);
  //   console.log(teamArr)

//   mapping through teamArr and returning the years to display in the dropdown
    const teamList = teamArr.map((team) => {
      return (
        <option value={team} key={team}>
          {team}
        </option>
      );
    });

  return (
    <div className="dropdown-container">
      <label htmlFor="rosters" className="pick-a-dropdown">
        Pick a Roster:
      </label>
      <select name="rosters" className="dropdown-box" id="roster-dropdown-box">
        {teamList}
      </select>
      <p className="footnote">(Note on roster)</p>
    </div>
  );
}

export default RosterDropdown;
import React, { useContext } from "react";
import { DataContext } from "./DataContext";

function TeamDropdown(props) {
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
      <label htmlFor="teams" className="pick-a-dropdown">
        Pick a Team:
      </label>
      <select name="teams" className="dropdown-box" id="team-dropdown-box">
        {teamList}
      </select>
      <p className="footnote">(Note on team)</p>
    </div>
  );
}

export default TeamDropdown;

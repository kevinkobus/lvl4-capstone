import React, { useContext } from "react";
import { DataContext } from "./DataContext";

function Team(props) {

  // const {} = useContext(DataContext);

  return (
    <div className="team-container">
      <div className="team-header">
        <h2 className="team-name">?TeamName?</h2>
        <img src="" alt="team crest" className="team-crest" />
      </div>
      <div>
        <h2></h2>
      </div>
    </div>
  );
}

export default Team;

import React, { useContext } from "react";
import { DataContext } from "./DataContext";

function Team(props) {
  const { teamInfo } = useContext(DataContext);
  // console.log(teamInfo)

  const teamResults = teamInfo.map((team, index) => {
    return (
      <div className="team-container" key={index} id={team.team.id}>
        <div className="left-side">
          <h1 className="team-name">{team.team.name}</h1>
          <img src={team.team.logo} alt="team crest" className="crest-image" />
          <h3>Founded: {team.team.founded}</h3>
          <h3>Home Field: {team.venue.name}</h3>
          <h3>Capacity: {team.venue.capacity}</h3>
          <h3>Surface: {team.venue.surface}</h3>
          <h3>Location: {team.venue.address}</h3>
          <h3>City: {team.venue.city}</h3>
        </div>
        <div className="right-side">
          <img src={team.venue.image} alt="stadium" className="stadium-image" />
        </div>
        {/* Link to roster */}
      </div>
    );
  });

return (
<div>{teamResults}</div>
)

  // destructure instead???

  // const { team, venue } = teamInfo;

  // return (
  //   <div className="team-container">
  //     <div className="left-side">
  //       <h1 className="team-name">{team.name}</h1>
  //       <img src={team.logo} alt="team crest" className="crest-image" />
  //       <h3>Founded: {team.founded}</h3>
  //       <h3>Home Field: {venue.name}</h3>
  //       <h3>Capacity: {venue.capacity}</h3>
  //       <h3>Surface: {venue.surface}</h3>
  //       <h3>Location: {venue.address}</h3>
  //       <h3>City: {venue.city}</h3>
  //     </div>
  //     <div className="right-side">
  //       <img src={venue.image} alt="stadium" className="stadium-image" />
  //     </div>
  //     {/* Link to roster */}
  //   </div>
  // );
}

export default Team;

import React from 'react'


function Team() {
  

  return (
      <div className="team-container">
        <h2 className="team-name">?Team Name?</h2>
        <img src="" alt="team crest" className="team-crest"/>
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
            <td>Bukayo Saka</td>
            <td>21</td>
            <td>7</td>
            <td>Midfielder</td>
          </tr>
        </tbody>
      </table>
      </div> 
  )
}

export default Team
import React from "react";
import { DataContext } from "./DataContext";

function Player() {

  // const {  } = useContext(DataContext);


  
  return (
    <div className="player-page-container">
      <div className="player-bio-container">
        <h4 className="player-name">Player Name?</h4>
        <img src="" alt="player pic" className="player-pic"/>
        <h4 className="player-info">Age:</h4>
        <h4 className="player-info">Jersey #:</h4>
        <h4 className="player-info">Position:</h4>
        <h4 className="player-info">Home Country:</h4>
      </div>
      <div className="player-stat-container">
        <h3 className="stat-title">Season Statistics</h3>
        <table className="player-stat-grid">
          <thead className="player-stat-header">
            <tr className="stat-header-row">
              <td>Appearances</td>
              <td>Lineups</td>
              <td>Minutes</td>
            </tr>
          </thead>
          <tbody className="player-stat-body">
            <tr className="player-stat-row">
              <td>20</td>
              <td>20</td>
              <td>1000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="player-stat-container">
        <table className="player-stat-grid">
          <thead className="player-stat-header">
            <tr className="stat-header-row">
              <td>Shots</td>
              <td>Goals</td>
              <td>Passes</td>
            </tr>
          </thead>
          <tbody className="player-stat-body">
            <tr className="player-stat-row">
              <td>30</td>
              <td>8</td>
              <td>600</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="player-stat-container">
        <table className="player-stat-grid">
          <thead className="player-stat-header">
            <tr className="stat-header-row">
              <td>Fouls</td>
              <td>Yellows</td>
              <td>Reds</td>
            </tr>
          </thead>
          <tbody className="player-stat-body">
            <tr className="player-stat-row">
              <td>30</td>
              <td>5</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Player;

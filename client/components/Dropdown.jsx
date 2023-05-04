import React, { useContext } from "react";
import { Context } from "./Context"

function Dropdown(props) {

  const { seasonList } = useContext(Context)
    
// need to reverse the order of years so they display with most currect year on top

  return (
    <div className="dropdown-container">
      <label htmlFor="seasons" className="pick-season-dropdown">Pick a season:</label>
      <select name="seasons" id="dropdown-box">
       {seasonList} 
      </select>
      <p className="footnote">(Year represents year season started, e.g. 2019 is the 2019 - 2020 season)</p>
    </div>
  );
}

export default Dropdown;

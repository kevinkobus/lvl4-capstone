import React, { useContext } from "react";
import { Context } from "./Context"

function Dropdown(props) {

  const { yearList } = useContext(Context)
  // console.log(yearList)

  return (
    <div className="dropdown-container">
      <label htmlFor="seasons">Pick a season:</label>
      <select name="seasons" id="dropdown-box">
       {yearList} 
      </select>
      <p className="footnote">(Year represents year season started, i.e. 2019 is the 2019 - 2020 season)</p>
    </div>
  );
}

export default Dropdown;

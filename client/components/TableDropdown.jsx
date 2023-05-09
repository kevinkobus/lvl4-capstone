import React, { useContext } from "react";
import { DataContext } from "./DataContext";

function TableDropdown(props) {
  const { seasonList, handleClick } = useContext(DataContext);


  return (
    <div className="dropdown-container">
      <label htmlFor="seasons" className="pick-a-dropdown">
        Pick a season:
      </label>
      <select
        name="seasons"
        className="dropdown-box"
        id="table-dropdown-box"
        onClick={handleClick}
      >
        {seasonList}
      </select>
      <p className="footnote">
        (Year represents year season started, e.g. 2019 is the 2019 - 2020
        season)
      </p>
    </div>
  );
}

export default TableDropdown;

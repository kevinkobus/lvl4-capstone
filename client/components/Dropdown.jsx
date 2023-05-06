import React, { useContext } from "react";
import { DataContext } from "./DataContext";

function Dropdown(props) {
  const { yearOptions } = useContext(DataContext);
  // console.log(yearOptions)

  // mapping through yearOptions to pull out the years and then reversing it so it has the most recent season first
  const seasonArr = yearOptions.map((year) => year.year);
  const revSeasonArr = seasonArr.reverse();

  // mapping through revSeasonArr and returning the years to display in the dropdown
  const seasonList = revSeasonArr.map((year) => {
    return (
      <option value={year} key={year}>
        {year}
      </option>
    );
  });

  return (
    <div className="dropdown-container">
      <label htmlFor="seasons" className="pick-season-dropdown">
        Pick a season:
      </label>
      <select name="seasons" id="dropdown-box">
        {seasonList}
      </select>
      <p className="footnote">
        (Year represents year season started, e.g. 2019 is the 2019 - 2020
        season)
      </p>
    </div>
  );
}

export default Dropdown;

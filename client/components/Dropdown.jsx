import React from "react";

function Dropdown() {
  return (
    <div className="dropdown-container">
      <select name="seasons" id="dropdown-box">
        <option value="">Choose a season</option>
        <option value="2022">2022 - 2023</option>
        <option value="2021">2021 - 2022</option>
        <option value="2020">2020 - 2021</option>
        <option value="2019">2019 - 2020</option>
        <option value="2018">2018 - 2019</option>
        <option value="2017">2017 - 2018</option>
        <option value="2016">2016 - 2017</option>
        <option value="2015">2015 - 2016</option>
        <option value="2014">2014 - 2015</option>
        <option value="2013">2013 - 2014</option>
        <option value="2012">2012 - 2013</option>
        <option value="2011">2011 - 2012</option>
        <option value="2010">2010 - 2011</option>
      </select>
    </div>
  );
}

export default Dropdown;

import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const Context = createContext();

function ContextProvider(props) {
  // setting state for the year options in Dropdown
  const [yearOptions, setYearOptions] = useState([]);

  // Axios GET request to pull from the API and set state for year options
  const eplYears = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
    params: { id: "39" },
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(eplYears)
      .then((res) => {
        setYearOptions(res.data.response[0].seasons);
      })
      .catch((err) => console.log(err));
  }, []);

  // creating an array of season years
  const seasonArr = yearOptions.map((year) => year.year);

  // creating <option> elements to render in Dropdown for season options with most current first
  const revSeasonArr = seasonArr.reverse();
  // ??? need to find a way for defaultYear to change based on selected season
  const defaultYear = revSeasonArr[0];
  const seasonList = revSeasonArr.map((year) => {
    return (
      <option value={year} key={year}>
        {year}
      </option>
    );
  });

  // setting state for SeasonTable with default being 0 index of revSeasonArr
  const [table, setTable] = useState([]);

  //Axios GET request to pull from the API and set state for SeasonTable
  const eplTable = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/standings",
    params: { season: "2022", league: "39" },
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(eplTable)
      .then((res) => {
        // console.log(res.data.response[0].league.standings[0])
        setTable(res.data.response[0].league.standings[0]);
      })
      .catch((err) => console.log(err));
  }, []);
// console.log(table)

  const tableResults = table.map((teams, index) => {
    return (
      <tr key={index} className="table-row">
        <td>{teams.team.name}</td>
        <td>{teams.all.played}</td>
        <td>{teams.points}</td>
        <td>{teams.all.win}</td>
        <td>{teams.all.draw}</td>
        <td>{teams.all.lose}</td>
        <td>{teams.all.goals.for}</td>
        <td>{teams.all.goals.against}</td>
        <td>{teams.goalsDiff}</td>
      </tr>
    );
  });

  return (
    <Context.Provider
      value={{
        seasonList,
        defaultYear,
        tableResults,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

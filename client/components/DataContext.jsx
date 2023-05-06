import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

function DataContextProvider(props) {

  // setting state for the year options in Dropdown
  const [yearOptions, setYearOptions] = useState([]);

  // Axios GET request to pull from the API and set state for year options
  const eplYears = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
    params: { id: "39" },
    headers: {
      "X-RapidAPI-Key": "0b368e70admshd9b37cd4f2ec0d0p196dfejsndef5043fca46",
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

  

  // setting state for SeasonTable with default being 0 index of revSeasonArr
  const [table, setTable] = useState([]);

  // Axios GET request to pull from the API and set state for SeasonTable
  const eplTable = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/standings",
    params: { season: "2022", league: "39" },
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "0b368e70admshd9b37cd4f2ec0d0p196dfejsndef5043fca46",
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


  // setting state for Team page if a team is clicked
  // const [teamInfo, setTeamInfo] = useState([]);

  // const eplTeam = {
  //   method: "GET",
  //   url: "https://api-football-v1.p.rapidapi.com/v3/teams",
  //   params: { id: "42" },
  //   headers: {
  //     "X-RapidAPI-Key": "0b368e70admshd9b37cd4f2ec0d0p196dfejsndef5043fca46",
  //     "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  //   },
  // };

  // useEffect(() => {
  //   axios
  //     .request(eplTeam)
  //     .then((res) => {
  //       // console.log(res.data.response[0].team)
  //       setTeamInfo(res.data.response[0].team);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

// console.log(typeof teamInfo)

  // const teamInfoResults = teamInfo.map((info, index) => (
  //     <Team
  //       key={index}
  //       info={info}
  //       id={info.id}
  //       founded={info.founded}
  //       logo={info.logo}
  //       name={info.name}
  //     />
  //   ));

  return (
    <DataContext.Provider
      value={{
        yearOptions,
        table,

      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export { DataContextProvider, DataContext };

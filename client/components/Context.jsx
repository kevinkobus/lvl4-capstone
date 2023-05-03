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

  // console.log(yearOptions)
  // console.log("years:", yearOptions)

// reversing the order of years in yearOptions so they display with most currect year on top


  // creating <option> elements to render for season options in dropdown
  // const yearList = yearOptions.map((year) => (
  //   <option value={year.year} key={year.year}>
  //     {year.year}
  //   </option>
  // ));

const yearList = yearOptions.reverse().map((year) => (
    <option value={year.year} key={year.year}>
      {year.year}
    </option>
  ));



// setting state for SeasonTable with default being 0 index of yearList
    const [table, setTable] = useState([yearList[0]])

//Axios GET request to pull from the API and set state for SeasonTable
  // const eplTable = {
  //   method: "GET",
  //   url: "https://api-football-v1.p.rapidapi.com/v3/standings",
  //   params: { season: "2022", league: "39" },
  //   headers: {
  //     "content-type": "application/octet-stream",
  //     "X-RapidAPI-Key": "",
  //     "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  //   },
  // };



  return (
    <Context.Provider
      value={{
        yearList,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

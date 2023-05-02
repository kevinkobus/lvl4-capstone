import React, { useState, createContext, useEffect } from "react";
import axios from "axios"

const Context = createContext()

function ContextProvider(props) {

  
  const [seasonArr, setSeasonArr] = useState([])
  const [yearArr, setYearArr] = useState([])

  // const [selectedSeason, setSelectedSeason] = useState("");

//Axios GET request to pull from the API and set state

// const eplTable = {
//   method: "GET",
//   url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
//   params: { id: "39" },
//   headers: {
//     "content-type": "application/octet-stream",
//     "X-RapidAPI-Key": "fca46",
//     "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//   },
// };

const seasons = data.response[0].seasons;
const years = seasons.map(season => season.year);
console.log(years)


// useEffect(() => {
//   axios
//     .request(eplTable)
//     .then((res) => {
//       setSeasonArr(res.data);
//     })
//     .catch((err) => console.log(err));
// }, []);

console.log(seasonArr)

const seasonYears = seasonArr.map((data, index) => (
  <Dropdown
    key={index}
    data={data}
    id={data.start}
    year={data.year}
  />
));

  return (
    <Context.Provider 
      value={{
        seasonArr,
        seasonYears,
      }}
    >
        {props.children}
      </Context.Provider>
  ) 
}

export { ContextProvider, Context };

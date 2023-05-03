import React from "react";
import { ContextProvider } from "./Context";
import SeasonTable from "./SeasonTable";
import Dropdown from "./Dropdown";



function Home(props) {
  return (
    <div className="home-page">
      <Nav />
      <ContextProvider>
        <Dropdown />
        <SeasonTable />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default Home;

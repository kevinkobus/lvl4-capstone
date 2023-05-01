import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SeasonTable from "./components/SeasonTable";
import Dropdown from "./components/Dropdown";
import Team from "./components/Team"

function App() {
  return (
    <div className="App">
      <Nav />
      <Dropdown />
      {/* <SeasonTable /> */}
      <Team />
      <Footer />
    </div>
  );
}

export default App;

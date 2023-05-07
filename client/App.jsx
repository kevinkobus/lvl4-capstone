import React from "react";
import { DataContext, DataContextProvider } from "./components/DataContext"
import Nav from "./components/Nav";
// import TableDropdown from "./components/TableDropdown";
// import SeasonTable from "./components/SeasonTable";
import TeamDropdown from "./components/TeamDropdown"
import Team from "./components/Team";
// import RosterDropdown from "./components/RosterDropdown"
// import Roster from "./components/Roster"
import Footer from "./components/Footer";

// Below components are for future development
// import PlayerDropdown from "./components/PlayerDropdown"
// import Player from "./components/Player";



// import { Switch, Route, Link } from "react-router-dom";
// import Home from "./components/Home";

function App(props) {

  // const {  } = useContext(DataContext)

  return (
    <div className="App">
      <DataContextProvider>
        <Nav />
        {/* <TableDropdown /> */}
        {/* <SeasonTable /> */}
        <TeamDropdown />
        <Team />
        {/* <RosterDropdown /> */}
        {/* <Roster /> */}
        <Footer />
      </DataContextProvider>    
    </div>
  );
}

export default App;

{
  /* <Nav>
        <Link to="localhost:5173/">Home</Link>
        <Link to="localhost:5173/about">About</Link>
        <Link to="localhost:5173/contact">Contact</Link>
      </Nav>

      <Switch>
        <Route exact path="localhost:5173/">
          <Home />
        </Route>

        <Route exact path="localhost:5173/about">
          <About />
        </Route>
        <Route exact path="localhost:5173/contact">
          <Contact />
        </Route>
      </Switch> */
}

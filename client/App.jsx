import React from "react";
import { DataContextProvider } from "./components/DataContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TablePage from "./components/TablePage";
import TeamPage from "./components/TeamPage";
import RosterPage from "./components/RosterPage";
// Below components are for future development
// import PlayerDropdown from "./components/PlayerDropdown"
// import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <Router>
        <DataContextProvider>
          <Nav>
            <Link to="/table" className="link">
              Table
            </Link>
            <Link to="/teams" className="link">
              Teams
            </Link>
            <Link to="/rosters" className="link">
              Rosters
            </Link>
          </Nav>
          <Routes>
            <Route path="/table" element={<TablePage />} />
            <Route path="/teams" element={<TeamPage />} />
            <Route path="/rosters" element={<RosterPage />} />
          </Routes>
          <Footer />
        </DataContextProvider>
      </Router>
    </div>
  );
}

export default App;

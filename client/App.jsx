import React from "react";
// import { Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SeasonTable from "./components/SeasonTable";
import Dropdown from "./components/Dropdown";
// import Team from "./components/Team";
// import Player from "./components/Player";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Home from "./components/Home";
import { ContextProvider } from "./components/Context"

function App() {
  return (
    <div className="App">
      <Nav />
      <ContextProvider>
        <Dropdown />
        <SeasonTable />
        {/* <Team /> */}
        {/* <Player /> */}
      </ContextProvider>
      <Footer />
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

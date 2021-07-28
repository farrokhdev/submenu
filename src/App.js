import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import { AppContainer } from "./components/AppContainer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <AppContainer>
          <Navbar />
          <Sidebar/>
          <Hero />
          <Submenu/>
        </AppContainer>
      </Router>
    </>
  );
}

export default App;

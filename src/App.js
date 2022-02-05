import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Characters from "./components/characters";
import Locations from "./components/location";
import Episodes from "./components/episodes";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </Router>
  );
}

export default App;

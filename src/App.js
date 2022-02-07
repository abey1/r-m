import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Nav from "./components/nav";
import Characters from "./components/characters";
import Locations from "./components/location";
import Episodes from "./components/episodes";
function App() {
  return (
    <div style={{ marginTop: "20px" }} className="container">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

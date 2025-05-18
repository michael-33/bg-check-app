import React from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router";
import { InputPage } from "./presentation/pages/InputPage";
import { CandidatesPage } from "./presentation/pages/Candidates";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="main-nav-bar">
          <NavLink to="/" className="main-nav-link">
            Input
          </NavLink>
          <NavLink to="/candidates" className="main-nav-link">
            Candidates
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<InputPage />} />
        <Route path="/candidates" element={<CandidatesPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;

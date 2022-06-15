import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          {/* more pages to be added here later */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

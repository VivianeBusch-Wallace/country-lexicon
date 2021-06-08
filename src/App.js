import React, { useState, useEffect } from "react";
// import axios, the helper for promises
import axios from "axios";

// import components
import "./components/Loading";
import "./components/CountriesOutput";

// what happens on clicking "Search"
function App() {
  function handleSubmit(e) {
    // prevent default of form
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          placeholder="Type a country name"
        />
        <button type="submit">Search</button>
      </form>
      <CountriesOutput className="results" />
    </div>
  );
}

export default App;

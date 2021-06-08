import React, { useState, useEffect } from "react";
// import axios, the helper for promises
import axios from "axios";

// import components
import "./components/Loading";
import "./components/CountriesOutput";

// what happens on clicking "Search"
function App() {
  // setting up states
  // user input state
  const [userInput, setUserInput] = useState("");
  // loading runs once in the beginning of mounting, gives user an idea that page is loading
  const [loading, setLoading] = useState(true);
  // change of search results
  const [searchResults, setSearchResults] = useState("");

  // make user input a state to track changes
  function handleUserInputChange(e) {
    setUserInput(e.target.value);
  }

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
          onChange={handleUserInputChange}
          placeholder="Type a country name"
        />
        <button type="submit">Search</button>
      </form>
      <CountriesOutput className="results" />
    </div>
  );
}

export default App;

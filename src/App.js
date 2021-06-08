import React, { useState, useEffect } from "react";
// import axios, the helper for promises
import axios from "axios";

// import components
import "./components/Loading";
import showResults from "./components/CountriesOutput";

function App() {
  // setting up states
  // user input state
  const [userInput, setUserInput] = useState("");
  // loading runs once in the beginning of mounting, gives user an idea that page is loading
  const [loading, setLoading] = useState(true);
  // change of search results
  const [searchResults, setSearchResults] = useState("");
  // setup useEffect
  // this useEffect will run in the beginning before loading the real page
  // Loading will be true until timeout
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // make user input a state to track changes
  function handleUserInputChange(e) {
    setUserInput(e.target.value);
  }

  // what happens on clicking "Search"
  function handleSubmit(e) {
    // prevent default of form
    e.preventDefault();
    // encode userInput into URL code
    // URI = Uniform Resource Identifier
    let inputToUrl = encodedURIComponent(userInput);
    // userInput is now usable for loading the API's search address
    let endpoint = `https://restcountries.eu/rest/v2/name/${inputToUrl}`;
  }

  // axios takes the endpoint and then fetches the data

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

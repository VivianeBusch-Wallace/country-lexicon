import React from "react";

function ShowResults() {
  return (
    <div className="search-results" key={i}>
      <div className="flag-wrapper">
        <img src={flag} alt={name} className="flag-image" />
      </div>
      <h2 className="country-name">{name}</h2>
    </div>
  );
}

export default showResults;

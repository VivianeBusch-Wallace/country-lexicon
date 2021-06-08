import React from "react";

function ShowResults({ results }) {
  const countryInfo = results.map((info) => {
    console.log(info);
  });
  return (
    <div className="search-results">
      <div>{results}</div>
      {/* <div className="flag-wrapper">
        <img src={flag} alt={name} className="flag-image" />
      </div>
      <h2 className="country-name">{name}</h2> */}
    </div>
  );
}

export default ShowResults;

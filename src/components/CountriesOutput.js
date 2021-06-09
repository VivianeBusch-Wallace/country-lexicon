import React from "react";
import ErrorMessage from "./ResultError";

function ShowResults({ results, error }) {
  const countryInfo = results.map((info, i) => {
    console.log(info);
    const { name, flag, capital, languages } = info;
    console.log(languages[0][name]);
    const lang = languages.map((language) => language.name);

    console.log(error);
    if (error) return <ErrorMessage />;

    return (
      <div className="search-results" key={i}>
        <div className="flag-wrapper">
          <img src={flag} alt={name} className="flag-image" />
        </div>
        <h2 className="country-name">{name}</h2>
        <p>
          {name}'s capital is: {capital}
        </p>
        <p>Languages: {lang}</p>
      </div>
    );
  });
  return <div className="search-results">{countryInfo}</div>;
}

export default ShowResults;

import React from "react";

// function ShowResults({ results }) {
//   const countryInfo = results.map((obj) => {
//     console.log(obj);
//     return <div>{results}</div>;
//   });
//   return (
//     <div className="search-results" key={something}>
//       {/* <div className="flag-wrapper">
//         <img src={flag} alt={name} className="flag-image" />
//       </div>
//       <h2 className="country-name">{name}</h2> */}
//     </div>
//   );
// }

// export default ShowResults;

const Country = ({ results }) => {
  const lands = results.map((obj, i) => {
    console.log(obj);
    const { name, flag, capital, population } = obj;
    return (
      <div key={i}>
        <h2>{name}</h2>
        <h5>Capital: {capital}</h5>
        <h5>Population: {population}</h5>
        <img src={flag} alt={name} className="flag" />
      </div>
    );
  });

  return <React.Fragment>{lands}</React.Fragment>;
};
export default Country;

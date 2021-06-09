import React from "react";

function ErrorMessage({ error }) {
  console.log(error);
  let errMessage = error.err.toString();
  console.log(errMessage);

  return (
    <div className="error-wrapper">
      <p className="error-message">
        Oops, you f*cked up. Erm, I mean ... Sorry, something went wrong.
      </p>
      <p>
        This happened:
        {errMessage}{" "}
      </p>
    </div>
  );
}

export default ErrorMessage;

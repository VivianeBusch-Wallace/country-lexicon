import React from "react";

function ErrorMessage({ error }) {
  console.log(error);
  return (
    <div className="error-wrapper">
      <p className="error-message">
        Oops, you f*cked up. Erm, I mean ... Sorry, something went wrong.
      </p>
      <p>This is the error: {error}</p>
    </div>
  );
}

export default ErrorMessage;

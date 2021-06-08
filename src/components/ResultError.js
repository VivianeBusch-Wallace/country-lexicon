import React from "react";

function ErrorMessage({ err }) {
  return (
    <div className="error-wrapper">
      <p className="error-message">
        Oops, you f*cked up. Erm, I mean ... Sorry, something went wrong.
      </p>
      <p>This is the error: {err}</p>
    </div>
  );
}

export default ErrorMessage;

import React from "react";

function Loading() {
  return (
    <div className="loading-page">
      {/* I want a spinning gif here */}
      <i class="fas fa-spinner"></i>
      <h3>Making you wait because I can.</h3>
      <h3>Beauty takes time you know...</h3>
    </div>
  );
}

export default Loading;

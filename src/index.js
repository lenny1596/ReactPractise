import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

const testPage = (
  <div>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Biriyani</li>
      <li>Burger</li>
      <li>Shwarma</li>
    </ul>
  </div>
);
root.render(testPage);

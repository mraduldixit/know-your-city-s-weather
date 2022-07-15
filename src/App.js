import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="containers">
        <div className="container">
          <CurrentLocation />
        </div>
        <div className="footer-info">
          <a href="https://github.com/mraduldixit/">
            <span>Mradul Dixit</span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

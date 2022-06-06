import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This Project was Coded by {""}
          <a
            href="https://serene-payne-47c9ff.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Motahare Shokri {""}
          </a>
          and is{" "}
          <a
            href="https://github.com/motishokri/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-Sourced On GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

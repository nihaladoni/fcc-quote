import React from "react";
import QuoteBox from "./components/QuoteBox";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 id="title">Quote Generator</h1>
      <QuoteBox />
    </div>
  );
}

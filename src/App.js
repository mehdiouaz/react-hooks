import "./App.css";
import MovieList from "./Component/MovieList";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2 style={{ color: "#d4af37" }}>Movie Store </h2>
        <MovieList />
      </div>
    </div>
  );
}

export default App;

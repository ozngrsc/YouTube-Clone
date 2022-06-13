import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      <Sidebar />

      {/* Recommended Video */}
    </div>
  );
}

export default App;

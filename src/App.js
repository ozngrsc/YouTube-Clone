import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import RecommendedVideos from "./Components/RecommendedVideos/RecommendedVideos";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app__page">
        <Sidebar />

        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;

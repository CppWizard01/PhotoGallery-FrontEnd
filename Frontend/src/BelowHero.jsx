import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./BelowHero.css";

function App() {

  return (
    <>
      <div className="container">
        <div className="box">
          <img src="/path/to/image1.jpg" alt="Item 1" className="box-image" />
          <div className="box-title">Name</div>
          <button className="view-album-button">View Album</button>
        </div>
        <div className="box">
          <img src="/path/to/image2.jpg" alt="Item 2" className="box-image" />
          <div className="box-title">Name</div>
          <button className="view-album-button">View Album</button>
        </div>
        <div className="box">
          <img src="/path/to/image3.jpg" alt="Item 3" className="box-image" />
          <div className="box-title">Name</div>
          <button className="view-album-button">View Album</button>
        </div>
      </div>
    </>
  );
}

export default App;

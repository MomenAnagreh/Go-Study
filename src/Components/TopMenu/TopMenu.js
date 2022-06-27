import React from "react";
import "./TopMenu.css";

export default function TopMenu() {
  return (
    <div className="MainContainer" style={{ position: "fixed" }}>
      <button className="ButtonContainer">
        <div className="LogoContainer">
          <div>GS</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ color: "GrayText" }}>Go</div>
          <div style={{ color: "#55EDFF" }}>Study</div>
        </div>
      </button>

      {/* <button>Home</button>

      <button>Whatever</button>

      <button>Contact Us</button> */}
    </div>
  );
}

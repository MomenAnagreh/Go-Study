import React from "react";
import "./TopMenu.css";
import { Link } from "react-router-dom";

export default function TopMenu() {
  return (
    <div className="MainContainer" style={{ position: "fixed" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="ButtonContainer">
          <div className="LogoContainer">
            <div>GS</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ color: "GrayText" }}>Go</div>
            <div style={{ color: "#55EDFF" }}>Study</div>
          </div>
        </button>
      </Link>

      <Link to="/search" style={{ textDecoration: "none" }}>
        <button>Search</button>
      </Link>
    </div>
  );
}

import React, { useState } from "react";
import "./TopMenu.css";
import { Link } from "react-router-dom";

export default function TopMenu() {
  const [line, setLine] = useState(false);
  const [color, setColor] = useState(false);

  return (
    <div className="MainContainer" style={{ position: "fixed" }}>
      <Link to="/" className="ButtonContainer" onClick={() => setColor(false)}>
        <div className="LogoContainer">
          <div style={{ color: "white" }}>GS</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ color: "GrayText" }}>Go</div>
          <div style={{ color: "#55EDFF" }}>Study</div>
        </div>
      </Link>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Link
          to="/search"
          className="ButtonContainer"
          onMouseEnter={() => setLine(true)}
          onMouseLeave={() => setLine(false)}
          style={{
            backgroundColor: color ? "whitesmoke" : "white",
            height: color ? "70px" : "30px",
          }}
        >
          <div
            style={{
              color: "GrayText",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "50px",
              alignItems: "center",
            }}
            onClick={() => {
              setColor(!color);
            }}
          >
            <div style={{ marginTop: "10px" }}>Search</div>
            <div
              style={{
                height: "2px",
                width: "100px",
                backgroundColor: color
                  ? "whitesmoke"
                  : line
                  ? "#55EDFF"
                  : "white",
                alignSelf: "flex-end",
              }}
            ></div>
          </div>
        </Link>
        <Link to="/search" className="ButtonContainer">
          <div style={{ color: "GrayText" }}>Button1</div>
        </Link>
        <Link to="/search" className="ButtonContainer">
          <div style={{ color: "GrayText" }}>Button2</div>
        </Link>
        <Link to="/search" className="ButtonContainer">
          <div style={{ color: "GrayText" }}>Button3</div>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          width: "150px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Login
      </div>
    </div>
  );
}

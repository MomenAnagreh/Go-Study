import React, { useState } from "react";
import "./TopMenu.css";
import { Link } from "react-router-dom";

export default function TopMenu() {
  const [line, setLine] = useState(false);
  const [line1, setLine1] = useState(false);
  const [line2, setLine2] = useState(false);
  const [line3, setLine3] = useState(false);
  const [color, setColor] = useState(false);
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [goColor, setGoColor] = useState();

  const lining = (color, line) => {
    return (
      <div
        style={{
          height: "2px",
          width: "100px",
          backgroundColor: color ? "#55EDFF" : line ? "#55EDFF" : "transparent",
        }}
      ></div>
    );
  };

  const turnOff = (color1, color2, color3) => {
    color1(false);
    color2(false);
    color3(false);
  };

  return (
    <div className="MainContainer" style={{ position: "fixed" }}>
      <Link
        to="/"
        className="ButtonContainer"
        onClick={() => {
          setColor(false);
          setColor1(false);
          setColor2(false);
          setColor3(false);
        }}
        onMouseEnter={() => setGoColor("GrayText")}
        onMouseLeave={() => setGoColor("white")}
      >
        <div className="LogoContainer">
          <div style={{ color: goColor }}>GS</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "GrayText" }}>Go</div>
          <div style={{ color: "#55EDFF" }}>Study</div>
        </div>
      </Link>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "1000px",
        }}
      >
        <Link
          to="/home"
          className="ButtonContainer"
          onMouseEnter={() => setLine3(true)}
          onMouseLeave={() => setLine3(false)}
          style={{
            flexDirection: "column",
            height: "70px",
            justifyContent: "space-between",
          }}
          onClick={() => {
            setColor3(true);
            turnOff(setColor, setColor2, setColor1);
          }}
        >
          <div />
          <div style={{ color: "GrayText", fontWeight: "inherit" }}>Home</div>
          <div>{lining(color3, line3)}</div>
        </Link>
        <Link
          to="/search"
          className="ButtonContainer"
          onMouseEnter={() => setLine(true)}
          onMouseLeave={() => setLine(false)}
          style={{
            flexDirection: "column",
            height: "70px",
            justifyContent: "space-between",
          }}
          onClick={() => {
            setColor(true);
            turnOff(setColor1, setColor2, setColor3);
          }}
        >
          <div />
          <div style={{ color: "GrayText", fontWeight: "inherit" }}>Search</div>
          <div>{lining(color, line)}</div>
        </Link>
        <Link
          to="/button1"
          className="ButtonContainer"
          onMouseEnter={() => setLine1(true)}
          onMouseLeave={() => setLine1(false)}
          style={{
            flexDirection: "column",
            height: "70px",
            justifyContent: "space-between",
          }}
          onClick={() => {
            setColor1(true);
            turnOff(setColor, setColor2, setColor3);
          }}
        >
          <div />
          <div style={{ color: "GrayText", fontWeight: "inherit" }}>
            Button1
          </div>
          <div>{lining(color1, line1)}</div>
        </Link>
        <Link
          to="/button2"
          className="ButtonContainer"
          onMouseEnter={() => setLine2(true)}
          onMouseLeave={() => setLine2(false)}
          style={{
            flexDirection: "column",
            height: "70px",
            justifyContent: "space-between",
          }}
          onClick={() => {
            setColor2(true);
            turnOff(setColor, setColor1, setColor3);
          }}
        >
          <div />
          <div style={{ color: "GrayText", fontWeight: "inherit" }}>
            Button2
          </div>
          <div>{lining(color2, line2)}</div>
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

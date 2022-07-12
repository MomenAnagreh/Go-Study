import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const [hover, setHover] = useState("white");
  const [hover1, setHover1] = useState("white");

  return (
    <div className="headContainer">
      <Link
        to="/home"
        className="boxContainer"
        style={{
          border:
            hover === "white" ? `2px solid lightgrey` : `2px solid ${hover}`,
          boxShadow: hover === "white" ? "1px 1px 1px white" : "none",
          textDecoration: "none",
          color: hover === "white" ? "black" : "#55EDFF",
          fontSize: "24px",
        }}
        onMouseEnter={() => setHover("#55EDFF")}
        onMouseLeave={() => setHover("white")}
      >
        <div>Universities</div>
      </Link>
      <Link
        to="/"
        className="boxContainer"
        style={{
          border:
            hover1 === "white" ? `2px solid lightgrey` : `2px solid ${hover1}`,
          boxShadow: hover1 === "white" ? "1px 1px 1px white" : "none",
          textDecoration: "none",
          color: hover1 === "white" ? "black" : "#55EDFF",
          fontSize: "24px",
        }}
        onMouseEnter={() => setHover1("#55EDFF")}
        onMouseLeave={() => setHover1("white")}
      >
        <div>VISAS</div>
      </Link>
    </div>
  );
}

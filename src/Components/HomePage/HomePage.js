import React, { useState } from "react";
import { Link } from "react-router-dom";
import background from "/Users/momenanagreh/Desktop/go-study/src/Images/Uni.jpg";
import visa from "/Users/momenanagreh/Desktop/go-study/src/Images/Visa.webp";
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
            hover === "white" ? `1px solid lightgrey` : `1px solid ${hover}`,
          boxShadow: "1px 1px 10px lightgrey",
          textDecoration: "none",
          color: hover === "white" ? "black" : "#55EDFF",
          fontSize: "30px",
          backgroundImage: `url(${background})`,
          backgroundSize: "360px",
          backgroundPosition: "30px -55px",
        }}
        onMouseEnter={() => setHover("#55EDFF")}
        onMouseLeave={() => setHover("white")}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            marginBottom: "20px",
          }}
        >
          Universities
        </div>
      </Link>
      <Link
        to="/"
        className="boxContainer"
        style={{
          border:
            hover1 === "white" ? `1px solid lightgrey` : `1px solid ${hover1}`,
          boxShadow: "1px 1px 10px lightgrey",
          textDecoration: "none",
          color: hover1 === "white" ? "black" : "#55EDFF",
          fontSize: "30px",
          backgroundImage: `url(${visa})`,
          backgroundSize: "240px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "90px 45px",
        }}
        onMouseEnter={() => setHover1("#55EDFF")}
        onMouseLeave={() => setHover1("white")}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            marginBottom: "25px",
          }}
        >
          VISAS
        </div>
      </Link>

      <Link
        to="/home"
        className="boxContainer"
        style={{
          border:
            hover === "white" ? `1px solid lightgrey` : `1px solid ${hover}`,
          boxShadow: "1px 1px 10px lightgrey",
          textDecoration: "none",
          color: hover === "white" ? "black" : "#55EDFF",
          fontSize: "30px",
          backgroundImage: `url(${background})`,
          backgroundSize: "360px",
          backgroundPosition: "30px -55px",
        }}
        onMouseEnter={() => setHover("#55EDFF")}
        onMouseLeave={() => setHover("white")}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            marginBottom: "20px",
          }}
        >
          Universities
        </div>
      </Link>
      <Link
        to="/"
        className="boxContainer"
        style={{
          border:
            hover1 === "white" ? `1px solid lightgrey` : `1px solid ${hover1}`,
          boxShadow: "1px 1px 10px lightgrey",
          textDecoration: "none",
          color: hover1 === "white" ? "black" : "#55EDFF",
          fontSize: "30px",
          backgroundImage: `url(${visa})`,
          backgroundSize: "240px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "90px 45px",
        }}
        onMouseEnter={() => setHover1("#55EDFF")}
        onMouseLeave={() => setHover1("white")}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            marginBottom: "25px",
          }}
        >
          VISAS
        </div>
      </Link>

      <Link
        to="/home"
        className="boxContainer"
        style={{
          border:
            hover === "white" ? `1px solid lightgrey` : `1px solid ${hover}`,
          boxShadow: "1px 1px 10px lightgrey",
          textDecoration: "none",
          color: hover === "white" ? "black" : "#55EDFF",
          fontSize: "30px",
          backgroundImage: `url(${background})`,
          backgroundSize: "360px",
          backgroundPosition: "30px -55px",
        }}
        onMouseEnter={() => setHover("#55EDFF")}
        onMouseLeave={() => setHover("white")}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            marginBottom: "20px",
          }}
        >
          Universities
        </div>
      </Link>
      <Link
        to="/"
        className="boxContainer"
        style={{
          border:
            hover1 === "white" ? `1px solid lightgrey` : `1px solid ${hover1}`,
          boxShadow: "1px 1px 10px lightgrey",
          textDecoration: "none",
          color: hover1 === "white" ? "black" : "#55EDFF",
          fontSize: "30px",
          backgroundImage: `url(${visa})`,
          backgroundSize: "240px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "90px 45px",
        }}
        onMouseEnter={() => setHover1("#55EDFF")}
        onMouseLeave={() => setHover1("white")}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            marginBottom: "25px",
          }}
        >
          VISAS
        </div>
      </Link>

      <Link
        to="/home"
        className="boxContainer"
        style={{
          border:
            hover === "white" ? `1px solid lightgrey` : `1px solid ${hover}`,
          boxShadow: "1px 1px 10px lightgrey",
          textDecoration: "none",
          color: hover === "white" ? "black" : "#55EDFF",
          fontSize: "30px",
          backgroundImage: `url(${background})`,
          backgroundSize: "360px",
          backgroundPosition: "30px -55px",
        }}
        onMouseEnter={() => setHover("#55EDFF")}
        onMouseLeave={() => setHover("white")}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            marginBottom: "20px",
          }}
        >
          Universities
        </div>
      </Link>
      <Link
        to="/"
        className="boxContainer"
        style={{
          border:
            hover1 === "white" ? `1px solid lightgrey` : `1px solid ${hover1}`,
          boxShadow: "1px 1px 10px lightgrey",
          textDecoration: "none",
          color: hover1 === "white" ? "black" : "#55EDFF",
          fontSize: "30px",
          backgroundImage: `url(${visa})`,
          backgroundSize: "240px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "90px 45px",
        }}
        onMouseEnter={() => setHover1("#55EDFF")}
        onMouseLeave={() => setHover1("white")}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            marginBottom: "25px",
          }}
        >
          VISAS
        </div>
      </Link>

      <Link
        to="/home"
        className="boxContainer"
        style={{
          border:
            hover === "white" ? `1px solid lightgrey` : `1px solid ${hover}`,
          boxShadow: "1px 1px 10px lightgrey",
          textDecoration: "none",
          color: hover === "white" ? "black" : "#55EDFF",
          fontSize: "30px",
          backgroundImage: `url(${background})`,
          backgroundSize: "360px",
          backgroundPosition: "30px -55px",
        }}
        onMouseEnter={() => setHover("#55EDFF")}
        onMouseLeave={() => setHover("white")}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            marginBottom: "20px",
          }}
        >
          Universities
        </div>
      </Link>
      <Link
        to="/"
        className="boxContainer"
        style={{
          border:
            hover1 === "white" ? `1px solid lightgrey` : `1px solid ${hover1}`,
          boxShadow: "1px 1px 10px lightgrey",
          textDecoration: "none",
          color: hover1 === "white" ? "black" : "#55EDFF",
          fontSize: "30px",
          backgroundImage: `url(${visa})`,
          backgroundSize: "240px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "90px 45px",
        }}
        onMouseEnter={() => setHover1("#55EDFF")}
        onMouseLeave={() => setHover1("white")}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            marginBottom: "25px",
          }}
        >
          VISAS
        </div>
      </Link>

      <Link
        to="/home"
        className="boxContainer"
        style={{
          border:
            hover === "white" ? `1px solid lightgrey` : `1px solid ${hover}`,
          boxShadow: "1px 1px 10px lightgrey",
          textDecoration: "none",
          color: hover === "white" ? "black" : "#55EDFF",
          fontSize: "30px",
          backgroundImage: `url(${background})`,
          backgroundSize: "360px",
          backgroundPosition: "30px -55px",
        }}
        onMouseEnter={() => setHover("#55EDFF")}
        onMouseLeave={() => setHover("white")}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            marginBottom: "20px",
          }}
        >
          Universities
        </div>
      </Link>
      <Link
        to="/"
        className="boxContainer"
        style={{
          border:
            hover1 === "white" ? `1px solid lightgrey` : `1px solid ${hover1}`,
          boxShadow: "1px 1px 10px lightgrey",
          textDecoration: "none",
          color: hover1 === "white" ? "black" : "#55EDFF",
          fontSize: "30px",
          backgroundImage: `url(${visa})`,
          backgroundSize: "240px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "90px 45px",
        }}
        onMouseEnter={() => setHover1("#55EDFF")}
        onMouseLeave={() => setHover1("white")}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            marginBottom: "25px",
          }}
        >
          VISAS
        </div>
      </Link>

      <Link
        to="/home"
        className="boxContainer"
        style={{
          border:
            hover === "white" ? `1px solid lightgrey` : `1px solid ${hover}`,
          boxShadow: "1px 1px 10px lightgrey",
          textDecoration: "none",
          color: hover === "white" ? "black" : "#55EDFF",
          fontSize: "30px",
          backgroundImage: `url(${background})`,
          backgroundSize: "360px",
          backgroundPosition: "30px -55px",
        }}
        onMouseEnter={() => setHover("#55EDFF")}
        onMouseLeave={() => setHover("white")}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            marginBottom: "20px",
          }}
        >
          Universities
        </div>
      </Link>
      <Link
        to="/"
        className="boxContainer"
        style={{
          border:
            hover1 === "white" ? `1px solid lightgrey` : `1px solid ${hover1}`,
          boxShadow: "1px 1px 10px lightgrey",
          textDecoration: "none",
          color: hover1 === "white" ? "black" : "#55EDFF",
          fontSize: "30px",
          backgroundImage: `url(${visa})`,
          backgroundSize: "240px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "90px 45px",
        }}
        onMouseEnter={() => setHover1("#55EDFF")}
        onMouseLeave={() => setHover1("white")}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            marginBottom: "25px",
          }}
        >
          VISAS
        </div>
      </Link>
    </div>
  );
}

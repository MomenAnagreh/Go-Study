import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Universities.css";

const Universities = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://universities.hipolabs.com/search?country=Jordan"
      );

      setData(response.data);
    };

    fetchData().catch(console.error);
  }, []);

  console.log(data);

  return (
    <div>
      <div className="mainContainer">
        {data?.map((uni) => {
          return (
            <div key={uni.name + data.indexOf(uni)} className="cardContainer">
              <div className="imageContainer">
                <img
                  src={require("/Users/momenanagreh/Desktop/go-study/src/Images/Uni.jpg")}
                  alt="Uni"
                  width="250px"
                  height="350px"
                  style={{ borderRadius: "25px" }}
                />
              </div>
              <div className="uniDetails">
                <div className="nameContainer">
                  <div className="titleContainer">Name:</div>
                  <div style={{ fontSize: "18px" }}>{uni.name}</div>
                </div>
                <div className="nameContainer">
                  <div className="titleContainer">Country:</div>
                  <div style={{ fontSize: "18px" }}>{uni.country}</div>
                </div>
                <div
                  className="nameContainer"
                  style={{
                    flexWrap: "wrap",
                  }}
                >
                  <div className="titleContainer">Websites:</div>
                  {uni?.web_pages?.map((url) => {
                    return (
                      <div
                        key={uni.name + url}
                        style={{
                          display: "flex",
                          fontSize: "18px",
                          flexDirection: "row",
                          marginBottom: "7px",
                        }}
                      >
                        <div style={{ marginRight: "5px" }}>
                          {uni?.web_pages?.indexOf(url) + 1}:
                        </div>
                        <a href={url}>{url}</a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Universities;

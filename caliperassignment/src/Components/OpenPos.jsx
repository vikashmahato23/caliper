import React from "react";
import "./OpenPos.css";

const OpenPos = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        className="svg_line"
      >
        <span
          class="line_Width"
          style={{ fontSize: "1.3rem", fontWeight: "500", marginRight: "2vw" }}
        >
          {props.countryName}
          <hr />
        </span>
        <svg
          style={{ position: "relative", top: "8px", cursor: "pointer" }}
          class="JoinUs--joinUs__headingIcon--1mXV7"
          width="14"
          height="18"
          role="img"
        >
          <path d="M7,0.2c-3.9,0-7,3.1-7,7c0,5.2,6.5,10.2,6.8,10.4c0.1,0.1,0.2,0.1,0.2,0.1s0.2,0,0.2-0.1C7.5,17.5,14,12.4,14,7.2C14,3.4,10.9,0.2,7,0.2z M7,10.2c-1.6,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S8.6,10.2,7,10.2z"></path>
        </svg>
      </div>

      <span style={{ display: "inline" }}></span>
      <div style={{ fontSize: "1rem", color: "grey" }}>
        {props.openPositions}
      </div>
      <br />
    </div>
  );
};

export default OpenPos;

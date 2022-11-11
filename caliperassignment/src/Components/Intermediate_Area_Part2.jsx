import React from "react";
import Button from "@material-ui/core/Button";
import "./Intermediate_Area_Part2.css";

const Intermediate_Area_Part2 = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10vh",
        }}
        className="Intermediate_Area_Part2_1"
      >
        <div style={{ marginRight: "5vw" }}>{props.date}</div>
        <div style={{ marginRight: "5vw" }}>{props.text}</div>
        <Button variant="outlined" color="secondary">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default Intermediate_Area_Part2;

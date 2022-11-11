import React from "react";
import "./Card1.css";
import Typography from "@material-ui/core/Typography";
const Card1 = (props) => {
  return (
    <>
      <div
        className="card1_row1"
        data-aos="fade-up-right"
        // style={{ marginTop: "15vh" }}
      >
        <img src={props.src1} />
        <div
          style={{
            color: "black",
            // margin: "auto",
            fontSize: "larger",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Caption
        </div>
      </div>

      <div className="card1_row2" data-aos="fade-up-left">
        <img src={props.src2} />
        <div
          style={{
            color: "black",
            // margin: "auto",
            fontSize: "larger",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Caption
        </div>
      </div>
    </>
  );
};

export default Card1;

import React from "react";
import "./NavBar.css";
import Button from "@material-ui/core/Button";
import "./uber-iosreel.mp4";
import Typography from "@material-ui/core/Typography";
import Card1 from "./Card1";
import OpenPos from "./OpenPos";
import Intermediate_Area_Part2 from "./Intermediate_Area_Part2";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate=useNavigate()
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  return (
    <>
      <div className="topnav" id="myTopnav">
        <a className="active" onClick={() => navigate("/")}>
          Home
        </a>

        <a  onClick={() => navigate("/products")}>
          Sell
        </a>
        <div className="dropdown">
          <button className="dropbtn">
            Services
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a onClick={() => navigate("/services")}>hydroponic farm Setup</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <a href="#about">About</a>
        <a onClick={myFunction}></a>
      </div>
    </>
  );
};

export default NavBar;

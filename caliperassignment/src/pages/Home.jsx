import React from 'react';
import "../Components/NavBar.css";
import Button from "@material-ui/core/Button";
import "../Components/uber-iosreel.mp4";
import Typography from "@material-ui/core/Typography";
import Card1 from "../Components/Card1";
import OpenPos from "../Components/OpenPos";
import Intermediate_Area_Part2 from "../Components/Intermediate_Area_Part2";
const Home = () => {
    return (
      <>
        <div>
          <div
            style={{
              display: "flex",
              padding: "5%",
              justifyContent: "space-between",
              flexDirection: "row",
              backgroundColor: "white",
            }}
            className="Top_Area_Responsive"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "4vh",
              }}
              className="Top_Area_Text_Left_Responsive"
            >
              <div>Featured Project</div>
              <div
                style={{
                  marginTop: "5vh",
                  fontSize: "50px",
                  width: "35vw",
                  cursor: "pointer",
                }}
              >
                <span
                  className="underLine"
                  style={{
                    fontFamily: " 'Ubuntu', sans-serif",
                    fontWeight: "bolder",
                  }}
                >
                  Hydroponic Farm Services
                </span>{" "}
                <br />{" "}
                <span
                  className="underLine1 Responsive_Head"
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: "100",
                  }}
                >
                  Looking To SETTING UP SMART FARM
                </span>
              </div>
              <div style={{ marginTop: "10vh" }} className="Responsive_Head">
                <Button variant="contained" color="secondary">
                  More Projects
                </Button>
              </div>
            </div>
            <div style={{ padding: "2%" }} data-aos="zoom-in-up">
              <video
                className="Vid"
            
                poster="https://static.wixstatic.com/media/da6885_8f2064e94804451cacd6baf93521d25c~mv2.jpg/v1/fill/w_1074,h_604,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Homepage-banner-2.jpg"
              ></video>
            </div>
          </div>
          <div style={{}}>
            <Typography
              style={{
                width: "45vw",
                fontSize: "30px",
                margin: "auto",
                textAlign: "center",
                fontWeight: "lighter",
              }}
              variant="subtitle1"
              color="initial"
            >
              AcmeFresh is a full-service agency, busy designing and building
              beautiful digital products, brands, and experiences.
              <br />
              <Button variant="outlined" color="secondary">
                Contact us
              </Button>
            </Typography>
          </div>
          <div className="vl">&nbsp;</div>
          <div className="vlt">
            {" "}
            <span style={{ fontSize: "30px" }}>All work, all play </span>
            <br />
            <span style={{ fontSize: "25px", fontWeight: "lighter" }}>
              {" "}
              Selected project
            </span>
          </div>
        </div>

        <div className="Intermediate_Area">
          <div>
            <div className="Intermediate_Area_Part1">What's new?</div>
            <div style={{ fontSize: "1.8rem", color: "grey", opacity: "0.5" }}>
              Our blog and news
            </div>
            <br />
            <br />
          </div>
          <div className="Intermediate_Area_Part2">
            <Intermediate_Area_Part2
              date=" Jan 6 Blog"
              text="24,895 Hours Later"
            />
            <Intermediate_Area_Part2
              date=" Oct 19 News"
              text="Figma Wanted Our CEO's insights for some reason"
            />
            <Intermediate_Area_Part2
              date="Oct 12 News"
              text="This Guy Really Won't Shut Up"
            />
          </div>
        </div>

        <div
          className="AboveFooter_Vid"
          data-aos="zoom-in-up"
          style={{ marginLeft: "10vw" }}
        >
          <video
            autoPlay
            muted
            src="https://ueno.co/static/interview-white-17edfff518080c24e6248ae5e6b232dc.mp4"
          ></video>
        </div>

        <div className="Footer_1">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="Footer_1_1">Join Us</div>
            <div style={{ fontSize: "1.8rem", color: "grey", opacity: "0.5" }}>
              Open positions
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "8%",
              paddingLeft: "20%",
              paddingRight: "20%",
              marginBottom: "30vh",
            }}
            className="Footer_1_Names"
          >
            <OpenPos
              countryName="San Francisco"
              openPositions="No open positions"
            />
            <OpenPos countryName="New York" openPositions="No open positions" />
            <OpenPos
              countryName="Los Angeles"
              openPositions="No open positions"
            />
          </div>
          <hr style={{ opacity: ".5", height: ".1px" }} />
        </div>

        <div className="Footer_2">
          <div>
            <div
              style={{
                fontSize: "2rem",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "100",
                letterSpacing: "-.025em",
              }}
            >
              Got a project?
            </div>
            <div
              style={{
                fontSize: "1.8rem",
                color: "#8d8f9a",
                fontWeight: "100",
                opacity: "0.6",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              Let's talk
            </div>
            <br />
            <Button variant="outlined" color="primary">
              Tell us everything
            </Button>
            <br />
            <br />
            <br />
            <br />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "8vw",
              }}
            >
              <ul>
                <li>
                  <Button variant="text" color="default">
                    Clients
                  </Button>{" "}
                </li>
                <li>
                  <Button variant="text" color="default">
                    About
                  </Button>{" "}
                </li>
                <li>
                  <Button variant="text" color="default">
                    News
                  </Button>{" "}
                </li>
                <li>
                  <Button variant="text" color="default">
                    Contact
                  </Button>{" "}
                </li>
                <li>
                  <Button variant="text" color="default">
                    Careers
                  </Button>{" "}
                </li>
                <li>
                  <Button variant="text" color="default">
                    Press
                  </Button>{" "}
                </li>
              </ul>
            </div>
            <ul>
              <li>
                <Button variant="text" color="default">
                  San Fransicso
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  New York
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  Tokyo
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  Los Angeles
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  Osaka
                </Button>{" "}
              </li>
            </ul>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "8vw",
              }}
            ></div>
            <ul>
              <li>
                <Button variant="text" color="default">
                  Newsletter
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  Blog
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  Bueno.co
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  Ueno.store
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  Ueno.design
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  Ueno.land
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  Playground
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  The Interview
                </Button>{" "}
              </li>
            </ul>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "8vw",
              }}
            ></div>
          </div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="Footer_3"
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ marginLeft: "2vw", width: "70vw" }}>
              <hr style={{ opacity: ".5", height: ".1px" }} />
            </div>

            <div style={{ marginLeft: "2vw", width: "100%" }}>
              <strong style={{ fontSize: "1.8rem" }}>ueno.</strong>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              position: "relative",
              left: "-10vw",
              top: "7vh",
            }}
          >
            <li>
              <svg viewBox="0 0 18 18" width="18" height="18">
                <path
                  fill="currentColor"
                  fill-rule="nonzero"
                  d="M5.2 0h7.6C15.7 0 18 2.3 18 5.2v7.6c0 2.9-2.3 5.2-5.2 5.2H5.2A5.2 5.2 0 010 12.8V5.2C0 2.3 2.3 0 5.2 0zM5 1.8A3.2 3.2 0 001.8 5v8c0 1.8 1.4 3.2 3.2 3.2h8c1.7 0 3.2-1.5 3.2-3.2V5c0-1.8-1.4-3.2-3.2-3.2H5zm8.7 1.3a1.1 1.1 0 110 2.3 1.1 1.1 0 010-2.3zM9 4.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.8a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4z"
                ></path>
              </svg>
            </li>
            <li>
              <svg width="18" height="17" viewBox="0 0 18 17">
                <path
                  fill="currentColor"
                  d="M8.7 0A8.7 8.7 0 006 17c.4 0 .5-.2.5-.4V15c-2.4.5-2.9-1.2-2.9-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9 0 1.3 1 1.3 1 .8 1.2 2 .8 2.6.6 0-.5.3-1 .5-1.1-2-.3-4-1-4-4.3 0-1 .4-1.8 1-2.4-.1-.2-.4-1.1 0-2.3 0 0 .8-.2 2.4.9a8.2 8.2 0 014.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1 0 2.3.6.6 1 1.4 1 2.4 0 3.3-2 4-4 4.3.3.2.6.8.6 1.6v2.4c0 .2.1.5.6.4A8.7 8.7 0 008.7 0z"
                ></path>
              </svg>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 18 18">
                <title>LinkedIn icon</title>
                <path
                  fill="currentColor"
                  d="M18 18h-4v-6.75c0-1.06-1.19-1.94-2.25-1.94S10 10.19 10 11.25V18H6V6h4v2c.66-1.07 2.36-1.76 3.5-1.76 2.5 0 4.5 2.04 4.5 4.51V18zM4 18H0V6h4v12zM2 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
                ></path>
              </svg>
            </li>
            <li>
              <svg width="9" height="18" viewBox="0 0 9 18">
                <path
                  fill="currentColor"
                  d="M9 0v3.6H7.2c-.6 0-.9.7-.9 1.4v2.2H9v3.6H6.3V18H2.7v-7.2H0V7.2h2.7V3.6c0-2 1.6-3.6 3.6-3.6H9z"
                ></path>
              </svg>
            </li>
          </div>
        </div>
      </>
    );
};

export default Home;
import React, { useState } from 'react';
import "./middle.css";
const MiddleSection = () => {
    const [img] = useState([
      {
        img: "https://static.wixstatic.com/media/da6885_2805988b152c48c8ae833fc1e2e8fb11~mv2.png/v1/fill/w_625,h_390,al_c,lg_1,q_85,enc_auto/vertical%20NFT%20system.png",
        title: "VERTICAL NFT SYSTEM",
      },
      {
        img: "https://static.wixstatic.com/media/da6885_4aee51ce063048249bada911f575e0d7~mv2.jpg/v1/fill/w_625,h_390,al_c,lg_1,q_80,enc_auto/aeroponic.jpg",
        title: "AEROPONIC SYSTEM",
      },

      {
        img: "https://static.wixstatic.com/media/da6885_e9b5fd9a33e24a1693700fc21c01123d~mv2.png/v1/fill/w_625,h_398,al_c,lg_1,q_85,enc_auto/Horizontal%20NFT%20system.png",
        title: "HORIZONTAL NFT SYSTEM",
      },
      {
        img: "https://static.wixstatic.com/media/da6885_f4405da518e44f6389d9603b3582dba6~mv2.png/v1/fill/w_625,h_396,al_c,lg_1,q_85,enc_auto/Indoor%20grow%20system.png",
        title: "INDOOR GROW SYSTEM",
      },
      {
        img: "https://static.wixstatic.com/media/da6885_a55d7a099a804bb59b1e2a02a9295fcc~mv2.png/v1/fill/w_625,h_388,al_c,lg_1,q_85,enc_auto/DWC%20system%20(Raft%20system).png",
        title: "DWC SYSTEM",
      },
      {
        img: "https://static.wixstatic.com/media/da6885_06205fb0ad6140448ce12fa771af2cbd~mv2.jpg/v1/fill/w_625,h_391,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dutch-bucket.jpg",
        title: "DUTCH BUCKET GROW SYSTEM",
      },
      {
        img: "https://static.wixstatic.com/media/da6885_5f205ef1e1ac4cfe8f200d734d843223~mv2.png/v1/fill/w_625,h_394,al_c,lg_1,q_85,enc_auto/Zip%20Grow%20System.png",
        title: "ZIP GROW SYSTEM",
      },
    ]);
    return (
      <div id="middle">
        <h2 className="font_2" style={{ textAlign: "center" }}>
          <span>Technologies for commercial hydroponic urban farming</span>
        </h2>

        
        {img.map((e,i)=>{
        return<div className="piccon" key={i}>
          <div className="picdetail">
            <div>
              <img
                src={e.img}
                alt=""
              />
            </div>
            {/* </div> */}
            <h2>
              <span>{e.title}</span>
            </h2>
          </div>
        </div>})}

       
      </div>
    );
};

export default MiddleSection;
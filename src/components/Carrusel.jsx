import React from "react";
import "./Carrusel.css";
import { useHistory } from "react-router-dom";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";


const Carrusel = () => {
  return (
    <div>
      <div>
        <div className="container">
          <ul className="slider">
            <li id="slide1">
              <img src={banner1} />
            </li>
            <li id="slide2">
              <img src={banner2} />
            </li>
            <li id="slide3">
              <img src={banner3} />
            </li>
          </ul>

          <ul className="menu">
            <li>
              <a href="#slide1"></a>
            </li>
            <li>
              <a href="#slide2"></a>
            </li>
            <li>
              <a href="#slide3"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;

/* eslint-disable no-implied-eval */
import React from "react";
import "./App.css";
import Back1 from "./Images/Moon.png";
import Fore1 from "./Images/Moon-removebg-preview.png";
import Eyes from "./Images/Eye1.jpg";
import Red from "./Images/Red Sky.jpg";
import Rinnegan from "./Images/Eye.png";
import Itachi from "./Images/Itachi.png";

export default function Desktop() {
  window.onload = function () {
    setTimeout(function () {
      if (window.innerWidth < 415) {
        window.location.href = "/Mobile";
      }
    }, 100);
  };
  function Eyess() {
    setTimeout(function () {
      let x = document.getElementById("state1");
      let y = document.getElementById("state2");

      if (x.className === "none") {
        y.className = "none";
      } else {
        y.className = "none";
      }
    }, 1000);
  }
  function UchihaItachi() {
    setTimeout(function () {
      let x = document.getElementById("itachi");

      if (x.className === "Itachi") {
        x.className = "uchihaItachi";
      } else {
        x.className = "uchihaItachi";
      }
    }, 600);
  }
  function Sharingan() {
    setTimeout(function () {
      let x = document.getElementById("state1");
      let y = document.getElementById("state3");
      let a = document.getElementById("sky");
      let b = document.getElementById("rinnegan");
      let c = document.getElementById("itachi2");
      let d = document.getElementById("slash");

      if (x.className === "none") {
        a.className = "Sky show animate__animated animate__fadeIn";
        y.className = "show animate__animated animate__fadeIn";
        b.className = "rinnegan show animate__animated animate__fadeIn";
        c.className = "itachi2 show animate__animated animate__fadeIn";
        d.className = "slashed";
      } else {
        a.className = "none";
        y.className = "show";
        b.className = "none";
        c.className = "none";
        d.className = "notSlashed";
      }
    }, 1000);
  }
  function switcher() {
    let x = document.getElementById("state1");
    let y = document.getElementById("state2");
    let z = document.getElementById("itachi");
    let b = document.getElementById("rinnegan");
    let c = document.getElementById("itachi2");
    let d = document.getElementById("sky");
    let e = document.getElementById("slash");
    let f = document.getElementById("overlay4");
    let g = document.getElementById("click");

    if (x.className !== "none") {
      x.className = "none";
      z.className = "none";
      y.className = "Eyes animate__animated animate__zoomIn";
      Eyess();
      Sharingan();
      d.className = "Sky show animate__animated animate__fadeIn";
      e.className = "slashedd";
      f.className = "overlay";
      g.className = "none";
    } else {
      x.className = "MoonRen animate__animated animate__fadeIn";
      z.className = "Itachi animate__animated animate__slideInUp";
      y.className = "none Eyes";
      b.className = "none";
      c.className = "none";
      d.className = "none animate__animated animate__fadeOut";
      e.className = "notSlashed";
      e.className = "none";
      g.className = "click";
    }
  }

  return (
    <div className="App" onLoad={UchihaItachi}>
      <div className="show" id="state1">
        <div className="overlay" id="overlay1"></div>

        <img
          src={Back1}
          alt="Moon"
          className="MoonRen animate__animated animate__fadeIn"
        />
        <img
          src={Fore1}
          alt="Itachi"
          className="Itachi animate__animated animate__slideInUp"
          id="itachi"
        />
      </div>
      <div className="none" id="state2">
        <img src={Eyes} alt="eyes" id="Eyes" />
        <div className="overlay" id="overlay2"></div>
      </div>
      <div className="none" id="state3">
        <img src={Red} className="none" alt="Sky" id="sky" />
        <div class="bird-container bird-container--one">
          <div class="bird bird--one"></div>
        </div>

        <div class="bird-container bird-container--two">
          <div class="bird bird--two"></div>
        </div>

        <div class="bird-container bird-container--three">
          <div class="bird bird--three"></div>
        </div>

        <div class="bird-container bird-container--four">
          <div class="bird bird--four"></div>
        </div>
        <div class="bird-container bird-container--five">
          <div class="bird bird--five"></div>
        </div>

        <div class="bird-container bird-container--six">
          <div class="bird bird--six"></div>
        </div>

        <div class="bird-container bird-container--seven">
          <div class="bird bird--seven"></div>
        </div>

        <div class="bird-container bird-container--eight">
          <div class="bird bird--eight"></div>
        </div>
        <img src={Rinnegan} className="none" alt="Moon" id="rinnegan" />
        <img src={Itachi} className="none" alt="itachi" id="itachi2" />
        <div className="overlay" id="overlay3"></div>
        <div className="none" id="overlay4"></div>
      </div>
      <input
        classname="deskTog"
        type="checkbox"
        onClick={() => {
          switcher();
          UchihaItachi();
        }}
        name="toggle"
        id="Toggler"
      />
      <div className="click" id="click">
        <h2>CLICK</h2>
      </div>

      <div className="name">
        <div class="notSlashed" id="slash">
          <div class="top" title="Uchiha Itachi"></div>
          <div class="bot" title="Uchiha Itachi"></div>
        </div>
      </div>
      <svg>
        <filter id="filth">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="50.9"
            numOctaves="1102"
            seed="4"
          >
            <animate
              attributeName="baseFrequency"
              dur="5s"
              values="0.05;0.005;0.05"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="8"></feDisplacementMap>
        </filter>
      </svg>
    </div>
  );
}

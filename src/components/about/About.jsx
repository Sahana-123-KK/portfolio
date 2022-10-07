import React from "react";
import "./about.css";
import me from "../../img/me.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        {/* <div className="shadow">

        </div> */}
        <div className="cardleft">
          <img src={me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="subtitle">Little description about myself</p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quo
          corrupti, eum quas magni ullam, at necessitatibus ratione nemo cum
          facilis, labore obcaecati ipsam? Accusamus reiciendis similique
          facilis quis possimus ducimus odit iste repellat.
        </p>
        <div className="ex">
          <h2 className="exp">Experience</h2>
          <div className="exlist">
            <div className="list">
              <h2 className="listtitle">Kameleon Technologies</h2>
              <p className="role">
                React Developer Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Soluta saepe culpa omnis?
              </p>
            </div>
            <div className="list">
              <h2 className="listtitle">Tech Affairs Website IIITDM</h2>
              <p className="role">
                Developed the Tech Affairs Website of IIITDM Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Qui natus incidunt
                fugit.
              </p>
            </div>
            <div className="list">
              <h2 className="listtitle">Smart Knower Internship</h2>
              <p className="role">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                natus incidunt fugit.
              </p>
            </div>
            <div className="list">
              <h2 className="listtitle">Exposys Labs Intership</h2>
              <p className="role">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                natus incidunt fugit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default About;

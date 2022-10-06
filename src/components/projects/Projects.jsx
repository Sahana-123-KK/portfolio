import React from "react";
import project from "../../img/project.jpg";
import "./projects.css";

const Projects = () => {
  return (
    <div className="p">
      <div className="p-left">
        <img src={project} alt="" className="pr-img" />
      </div>
      <div className="p-right">
        <h1 className="p-title">My Projects</h1>
        
        <div className="pros">
          <div className="pro">
            <h2 className="headpro">Personal Portfolio </h2>
            <span className="pdesc">
              Its a Portfolio website based on react
            </span>
            <img src={project} alt="" className="proimg" />
            <span className="ptech">Technologies Used: HTML,CSS,React Js</span>
          </div>
          <div className="pro">
            <h2 className="headpro">Memories App</h2>
            <span className="pdesc">
              MERN stack application where users can create,update,view,delete
              and like posts
            </span>
            <img src={project} alt="" className="proimg" />
            <span className="ptech">Technologies Used: HTML,CSS,Bootstrap,MERN</span>
          </div>
          <div className="pro">
            <h2 className="headpro">iNotebook</h2>
            <span className="pdesc">
              a MERN stack application where users can create
              account,login,logout,create,update,delete and view their notes
            </span>
            <img src={project} alt="" className="proimg" />
            <span className="ptech">Technologies Used: HTML,CSS,Bootstrap,MERN</span>
          </div>
          <div className="pro">
            <h2 className="headpro">Hotel Booking App</h2>
            <span className="pdesc">
              a MERN stack application where users can login, create account,
              logout,filter hotels by city,date, availability and book a hotel,
              and a hotel room booked already can't be booked again by another
              user.
            </span>
            <img src={project} alt="" className="proimg" />
            <span className="ptech">Technologies Used: HTML,CSS,Bootstrap,MERN</span>
          </div>
          <div className="pro">
            <h2 className="headpro">Restaurant Webiste</h2>
            <span className="pdesc">Restaurent Landing Page</span>
            <img src={project} alt="" className="proimg" />
            <span className="ptech">Technologies Used: HTML,CSS</span>
          </div>
          <div className="pro">
            <h2 className="headpro">College Website</h2>
            <span className="pdesc">College Website</span>
            <img src={project} alt="" className="proimg" />
            <span className="ptech">Technologies Used: HTML,CSS,Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

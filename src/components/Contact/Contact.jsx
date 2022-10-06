import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="con">
      <div className="sty"></div>
      <div className="con-left">
        <h1 className="conheadleft">Let's Discuss your Project</h1>
        <div className="detailscon">
          <i className="bi bi-telephone-outbound"></i>
          <p>+916383526812</p>
        </div>
        <div className="detailscon">
          <i className="bi bi-envelope"></i>
          <p>saisahanaece2019@gmail.com</p>
        </div>
        <div className="detailscon">
          <i className="bi bi-geo-alt"></i>{" "}
          <p>Kolatur, Chennai - 600099,TamilNadu, India</p>
        </div>
      </div>
      <div className="con-right">
        <div className="top">
          <span className="status">What's your story?</span>
          <span className="con-desc">
            Get in Touch, Always available for freelancing, if the right
            projects come along me.
          </span>
        </div>

        <div className="formscontact">
          <form>
            <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label for="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label"></label>
              <textarea
                name="message"
                class="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" className="btn btnown">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

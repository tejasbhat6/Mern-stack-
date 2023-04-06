import React, { useState } from "react";

import profilepic from "../images/profilepic.jpg";

import "./css/About.css";
const About = () => {
  const [dp, setDp] = useState(true);
  const [dp1, setDp1] = useState(false);
  return (
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4 pic">
              <img src={profilepic} className="img1" alt="" />
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>tejas bhat</h5>
                <h6>web developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS : <span>1/10</span>
                </p>

                <ul className="nav nav-pills" role="tablist">
                  <li className="nav-item1">
                    <a
                      className="nav-link active me-5"
                      type="button"
                      onClick={() => {setDp(true);setDp1(false)}}
                      id="home-tab"
                      data-toggle="pill"
                      href="#home"
                      data-target="#home"
                      // role="tab"
                      // aria-controls="home"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item1">
                    <a
                      className="nav-link active"
                      type="button"
                      onClick={() => {setDp(false);setDp1(true)}}
                      id="profile-tab"
                      data-toggle="pill"
                      href="#profile"
                      data-target="#profile"
                      // role="tab"
                      // aria-controls="profile"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                anme="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 work">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href="https://github.com/" target="_tejas">
                  GITHUB
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/tejas-bhat-64815b20a"
                  target="_tejas"
                >
                  LindedIn
                </a>
                <br />
                <a href="https://youtube.com/" target="_tejas">
                  YouTube
                </a>
                <br />
                <a href="https://www.facebook.com/" target="_tejas">
                  FaceBook
                </a>
                <br />
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabConten">
                {dp && (
                  <div
                    className=""
                    id="home"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>USER ID</label>
                      </div>
                      <div className="col-md-6">
                        <p>123456789</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>NAME</label>
                      </div>
                      <div className="col-md-6">
                        <p>tejas bhat</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                        <p>Engineer</p>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>City</label>
                      </div>
                      <div className="col-md-6">
                        <p>Mumbai</p>
                      </div>
                    </div>
                  </div>
                )}
                {dp1 && (
                  <div
                    className=""
                    id="profile"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6">Expert </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div className="col-md-6">5</div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Rate</label>
                      </div>
                      <div className="col-md-6">10$/day </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;

import React from 'react';
import email from '../assets/email2.png';
import link from '../assets/linkedin.png';

const Main = () => {
  return (
    <div className="main-con">
      <h3 className="main-h3">Katherine Scott</h3>
      <h4 className="main-span">Frontend Developer </h4>
      <span className="main-site">
        <a href="http://katherineascott.com/">Visit My Portfolio</a>
      </span>
      <div className="btn-class">
        <button className="main-btn email-btn">
          Email<img src={email} className="email"></img>
        </button>
        <button className="main-btn link-btn">
          LinkedIn<img src={link} className="link" href="https://www.linkedin.com/in/katherine-scott-a0a"></img>
        </button>
      </div>
      <div className="main-about">
        <h3>About Me</h3>
        <p>
          Ambitious, career-focused job seeker, anxious to obtain a Front End
          Developer position to help launch career while achieving company
          goals. After many years in healthcare, its time to focus on my passion
          for coding and research.{' '}
        </p>
        <h3>Intreset</h3>
        <p> Coding, Research, Yoga, Reading, and Hiking! </p>
      </div>
    </div>
  );
};

export default Main;

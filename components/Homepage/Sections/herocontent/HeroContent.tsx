import React, { FC } from "react";
import "./index.css";
const HeroContent: FC = () => {
  return (
    <div className="hero-banner mt-10 ">
      <div className=" hero-content">
        <p className="header-text">Providing Best</p>
        <span>WEB Services</span>
        <p className="text pb-5">
          Letter of on become he tended active enable to. Vicinity relation
          sensible sociable surprise screened no up as.
        </p>
        <div className="gap-sm flex">
          <button className="btn-hover shadow" style={{padding:"10px 40px"}}> Get Started</button>
          <button className="btn-not-hover" style={{padding:"10px 40px"}}>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

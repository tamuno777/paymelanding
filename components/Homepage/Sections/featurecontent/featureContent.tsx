import React, { FC } from "react";
import "./index.css";
import FeatureCard from "./featurecards";

const FeatureContent: FC = () => {
  return (
    <div className="feature-content p-10">
      <div className="flex w-full align-item pb-5 ">
        <p className="thin pe-2">Our </p>
        <p className="bold">Features</p>
      </div>
      <div className="align-item">
        <p className="text " style={{ width: "500px" }}>
          Letter of on become he tended active enable to. Vicinity relation
          sensible sociable surprise screened no up as.
        </p>
      </div>

      <div>
        <FeatureCard/>

      </div>
    </div>
  );
};

export default FeatureContent;

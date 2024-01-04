import React, { FC } from "react";
import "./index.css";
import Image from "next/image";
import { datamanagment, sco, webdesign, webdev } from "@/assets/images";
import { rate } from "@/assets/icons";

const ServiceContent: FC = () => {
  return (
    <div className="service-content p-10">
      <div className="flex w-full align-item pb-5 ">
        <p className="thin pe-2">Best </p>
        <p className="bold">Service</p>
      </div>
      <div className="align-item">
        <p className="text " style={{ width: "500px" }}>
          Letter of on become he tended active enable to. Vicinity relation
          sensible sociable surprise screened no up as.
        </p>
      </div>

      <div className="flex img-div mt-10 ">
        <div style={{ gap: "20px" }} className="flex flex-col up ">
          <div style={{ position: "relative", textAlign: "center" }}>
            <Image src={webdev} alt="web development" className="img" />
            <div className="centered-text">
              Web Development
              <Image src={rate} alt="rate 5 start" className="my-1" />
            </div>
          </div>

          <div style={{ position: "relative", textAlign: "center" }}>
            <Image src={datamanagment} alt="date managment" className="img" />
            <div className="centered-text">
              Data Managment
              <Image src={rate} alt="rate 5 start" className="my-1" />
            </div>
          </div>
        </div>
        <div style={{ gap: "20px" }} className="flex flex-col down py-20 ">
          <div style={{ position: "relative", textAlign: "center" }}>
            <Image src={webdesign} alt="web design" className="img" />
            <div className="centered-text">
              Web Design{" "}
              <Image src={rate} alt="rate 5 start" className="my-1" />
            </div>
          </div>
          <div style={{ position: "relative", textAlign: "center" }}>
            <Image src={sco} alt="sco" className="img" />
            <div className="centered-text">
              SCO 
              <Image src={rate} alt="rate 5 start" className="my-1" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="btn-not-hover" style={{ padding: "10px 40px" }}>
          Explore All
        </button>
      </div>
    </div>
  );
};

export default ServiceContent;

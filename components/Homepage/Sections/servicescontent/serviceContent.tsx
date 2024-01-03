import React, { FC } from "react";
import "./index.css";
import Image from "next/image";
import { datamanagment, sco, webdesign, webdev } from "@/assets/images";

const ServiceContent: FC = () => {
  return (
    <div className="service-content p-10">
      <div className="flex w-full align-item pb-5 ">
        <p className="thin pe-2">Best </p>
        <p className="bold">Service</p>
      </div>
      <div className="align-item">
        <p className="text " style={{width:"500px"}}>
          Letter of on become he tended active enable to. Vicinity relation
          sensible sociable surprise screened no up as.
        </p>
      </div>

      <div className="flex img-div my-10 ">
        <div style={{gap:"20px"}} className="flex flex-col up " >
            <Image src={webdev} alt="web development" className="img"/>
            <Image src={datamanagment} alt="date managment" className="img"/>
        </div>
        <div style={{gap:"20px"}} className="flex flex-col down py-20 ">
            <Image src={webdesign} alt="web development" className="img"/>
            <Image src={sco} alt="date managment" className="img"/>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;

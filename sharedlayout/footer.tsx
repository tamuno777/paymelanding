import React, { FC } from "react";
import "./index.css";
import Image from "next/image";
import { paymefooterlogo } from "@/assets/icons";

const Footer: FC = () => {
  return (
    <div className="footer-container ">
      <div className="flex-col" style={{ display: "flex" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3> People who are ready took these courses!</h3>
        </div>{" "}
        <div className="mt-5" style={{ display: "flex", justifyContent: "center" }}>
          <button className="demo-btn">Schedule demo</button>
        </div>{" "}
      </div>
      <div className="flex-div hello ">
        <div>
          <Image src={paymefooterlogo} alt="payme logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="content">
          <p>
            <strong>Links</strong>
          </p>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="content">
          <p>
            <strong>Company</strong>
          </p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="content">
          <p>
            <strong>Get in touch</strong>
          </p>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { paymeLogo } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Nav: FC = () => {
  return (
    <div
      className="flex items-center justify-between  w-full padding-sm nav-content"
      style={{
        background: "white",
        position: "fixed",
        top: "0",
        zIndex: "10",
        padding:"20px 40px 0 40px",
        // maxWidth: "87vw",
        overflow: "hidden",
      }}
    >
      <div className="  gap-lg flex-div">
        <div>
          {" "}
          <Link href="/">
            <Image src={paymeLogo} alt="payme logo" />
          </Link>
        </div>
        <ul className="flex-div gap-lg">
          <li>
            <Link href="/"> Home</Link>
          </li>
          <li>
            <Link href="/About"> About</Link>
          </li>
          <li>
            <Link href="/Testimonials"> Testimonials</Link>
          </li>
          <li>
            <Link href="/Contact"> Contact</Link>
          </li>
        </ul>
      </div>
      <div className="gap-sm flex-div">
        <button className="btn">Sign in</button>
        <button className="btn-not-hover"> Sign up</button>
      </div>
    </div>
  );
};

export default Nav;

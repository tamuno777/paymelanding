"use client";
import { paymeLogo } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import "./index.css";

const Nav: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between  w-full padding-sm nav-content">
      <div className="flex">
        <div className="  gap-lg flex-div content">
          <div>
            {" "}
            <Link href="/">
              <Image src={paymeLogo} alt="payme logo" />
            </Link>
          </div>
          <ul
            className={` flex-div gap-lg menu  ${isMenuOpen ? "open  " : ""}`}
          >
            <li onClick={toggleMenu} className="show-btn">
              {" "}
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                height="14"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y2="18" x2="6" y1="6" x1="18"></line>
                <line y2="18" x2="18" y1="6" x1="6"></line>
              </svg>
            </li>
            <li>
              <Link href="/" className="li">
                {" "}
                Home
              </Link>
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
            <li className="paste-button">
              <button className="button">More &nbsp; ▼</button>
              <div className="dropdown-content">
                <Link href="#" id="top" className="btn">
                  Sign in
                </Link>
                <Link
                  href="#"
                  id="middle"
                  className="btn"
                  style={{ borderRadius: "0 " }}
                >
                  {" "}
                  Sign up
                </Link>
              </div>
            </li>
            <li>
              <Link
                href="https://winnie-rose.vercel.app/"
                id="bottom"
                className="btn"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </div>
  );
};

export default Nav;

"use client"
import { paymeLogo } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import "./index.css"

const Nav: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div
      className="flex items-center justify-between  w-full padding-sm nav-content"
      
    >
      <div className="flex">
      <div className="  gap-lg flex-div content">
        <div>
          {" "}
          <Link href="/">
            <Image src={paymeLogo} alt="payme logo" />
          </Link>
        </div>
        <ul className= {` flex-div gap-lg menu  ${isMenuOpen ? 'open  ' : ''}`}>
          <li onClick={toggleMenu} className= "show-btn">close</li>
          <li>
            <Link href="/" className="li"> Home</Link>
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
          <li>
            <Link href="#"className="btn">Sign in</Link>
          </li>
          <li>
            <Link href="#"className="btn-not-hover"> Sign up</Link>
          </li>
          <li>
            <Link href="#"className="btn">Portfolio</Link>
          </li>
         
         
        </ul>
      </div>
     
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
    </div>
  );
};

export default Nav;



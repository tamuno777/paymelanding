import { paymeLogo } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Nav: FC = () => {
  return (
    <div className="flex items-center justify-between  w-full padding-sm">
      <div className="  gap-lg flex-div">
        <div>
          {" "}
          <Image src={paymeLogo} alt="payme logo" />
        </div>
        <ul className="flex-div gap-lg">
          <li>
            <Link href="#"> Home</Link>
          </li>
          <li>
            <Link href="#"> About</Link>
          </li>
          <li>
            <Link href="#"> Testimonials</Link>
          </li>
          <li>
            <Link href="#"> Contact</Link>
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

import { paymeLogo } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Nav: FC = () => {
  return (
    <div
      className="flex items-center justify-between py-5 w-full"
      style={{
        justifyContent: "space-between",
        display: "flex",
        padding: "10px 30px",
      }}
    >
      <div
        className=" flex justify-between"
        style={{
          justifyContent: "space-between",
          display: "flex",
          background: "pink",
          padding: "5px 10px",
          gap: "20px",
        }}
      >
        <div>
          {" "}
          <Image src={paymeLogo} alt="payme logo" />
        </div>
        <ul
          className="flex justify-between "
          style={{
            justifyContent: "space-between",
            display: "flex",
            gap: "20px",
          }}
        >
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
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          gap: "20px",
        }}
      >
        <button className="px-4 py-2 text-sm  text-black">Sign in</button>
        <button className="px-4 py-2 text-sm   text-green border border-green">
          {" "}
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Nav;

import React, { FC } from "react";
import "./index.css";
import Image from "next/image";
import { Brightpearl, Pearlfisher, Planday, Uumbraco } from "@/assets/icons";

const PartnersContent: FC = () => {
  return (
    <div className="partners-content flex-div py-10 md:px-40 sm:px-10">
      <Image src={Planday} alt="planday" />
      <Image src={Uumbraco} alt="planday" />
      <Image src={Pearlfisher} alt="planday" />
      <Image src={Brightpearl} alt="planday" />
      <Image src={Planday} alt="planday" />
    </div>
  );
};

export default PartnersContent;

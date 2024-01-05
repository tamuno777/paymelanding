import React, { FC } from "react";
import {
  ClientSay,
  FeatureContent,
  HeroContent,
  PartnersContent,
  Pricingcontent,
  ServiceContent,
} from "@/components/Homepage/Sections";

const Homepage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col  justify-between">
      <HeroContent />
      <PartnersContent />
      <ServiceContent />
      <FeatureContent />
      <ClientSay />
      <Pricingcontent/>
    </div>
  );
};

export default Homepage;

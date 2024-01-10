import React, { FC } from "react";
import {
  ClientSay,
  Faq,
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
      <Faq/>
    </div>
  );
};

export default Homepage;

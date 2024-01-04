import React, { FC } from "react";
import {
  ClientSay,
  FeatureContent,
  HeroContent,
  PartnersContent,
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
    </div>
  );
};

export default Homepage;

import React, { FC } from 'react'
import { FeatureContent, HeroContent, PartnersContent, ServiceContent } from "@/components/Homepage/Sections";


const Homepage:FC = () => {
  return (
    <div className="flex min-h-screen flex-col  justify-between">
      <HeroContent/>
      <PartnersContent/>
      <ServiceContent/>
      <FeatureContent/>
    </div>
  )
}

export default Homepage
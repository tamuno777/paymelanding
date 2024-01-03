import React, { FC } from 'react'
import { HeroContent } from './Sections'

const Homepage:FC = () => {
  return (
    <div className="flex min-h-screen flex-col  justify-between">
      <HeroContent/>
    </div>
  )
}

export default Homepage
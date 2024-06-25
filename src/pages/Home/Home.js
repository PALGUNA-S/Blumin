import React from 'react'
import Home from './Banner'
import WhatWeOffer from './WhatWeOffer'
import WhoWeAre from './WhoWeAre'
import WhyChoose from './WhyChoose'
import PageTransitions from '../../components/PageTransitions'

const index = () => {
  return (
    <>
      <PageTransitions>
        <Home />
        <WhoWeAre />
        <WhatWeOffer />
        <WhyChoose />
      </PageTransitions>
    </>
  )
}

export default index
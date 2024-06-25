import React from 'react'
import OverView from './OverView'
import Partners from './Partners'
import CoreValues from './CoreValues'
import Team from './Team'
import PageTransitions from '../../components/PageTransitions'

const AboutUs = () => {
    return (
        <>
            <PageTransitions>
                <OverView />
                <Partners />
                <CoreValues />
                <Team />
            </PageTransitions>
        </>
    )
}

export default AboutUs
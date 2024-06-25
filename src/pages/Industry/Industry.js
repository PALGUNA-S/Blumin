import React from 'react'
import Banner from './Banner'
import Blogs from './Blogs'
import Solutions from './Solutions'
import PageTransitions from '../../components/PageTransitions'

const Industry = () => {
    return (
        <>
            <PageTransitions>
                <Banner />
                <Solutions />
                <Blogs />
            </PageTransitions>
        </>
    )
}

export default Industry
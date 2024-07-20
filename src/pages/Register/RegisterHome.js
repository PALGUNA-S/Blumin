import React from 'react'
import PageTransitions from '../../components/PageTransitions'
import Employee from './Employee'
import Professor from './Professor'
import Student from './Student'

const RegisterHome = () => {
    return (
        <>
            <PageTransitions>
                <Student />
                <Professor />
                <Employee />
            </PageTransitions>
        </>
    )
}

export default RegisterHome
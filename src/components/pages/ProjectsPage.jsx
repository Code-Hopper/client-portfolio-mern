import React from 'react'

import { RecentProjects } from '../sections/RecentProjects'
import { Header } from '../includes/Header'
import Footer from '../includes/Footer'
import MainContact from '../sections/MainContact'

const ProjectsPage = () => {
    return (
        <>
            <Header />
            <RecentProjects />
            <MainContact />
            <Footer />
        </>
    )
}

export { ProjectsPage }

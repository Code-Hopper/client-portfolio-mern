import React from 'react'
import { Header } from '../includes/Header'
import Heros from '../sections/Heros'
import MainPreks from '../sections/MainPreks'
import SocialMediaSidebar from '../sections/SocialMediaSidebar'

const Home = () => {
    return (
        <>
            <Header />
            <SocialMediaSidebar />
            <Heros />
            <MainPreks />
        </>
    )
}

export { Home }
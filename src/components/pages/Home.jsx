import React from 'react'
import { Header } from '../includes/Header'
import Heros from '../sections/Heros'
import MainPreks from '../sections/MainPreks'
import SocialMediaSidebar from '../sections/SocialMediaSidebar'
import QuickToast from '../sections/QuickToast'
import MyCareer from '../sections/MyCareer'

const Home = () => {
    return (
        <>
            <Header />
            <QuickToast />
            <SocialMediaSidebar />
            <Heros />
            <MainPreks />
            <MyCareer />
        </>
    )
}

export { Home }
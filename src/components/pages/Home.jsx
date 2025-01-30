import React from 'react'
import { Header } from '../includes/Header'
import Heros from '../sections/Heros'
import MainPreks from '../sections/MainPreks'
import SocialMediaSidebar from '../sections/SocialMediaSidebar'
import QuickToast from '../sections/QuickToast'
import MyCareer from '../sections/MyCareer'
import MainServices from '../sections/MainServices'
import AboutMe from '../sections/AboutMe'
import RecentBlogGrid from '../sections/RecentBlogGrid'
import StartConversation from '../sections/StartConversation'
import MainContact from '../sections/MainContact'
import Footer from '../includes/Footer'
// import Projects from '../sections/Projects'

const Home = () => {
    return (
        <>
            <Header />
            <QuickToast />
            <SocialMediaSidebar />
            <Heros />
            <MainPreks />
            <MainServices />
            <AboutMe />
            <StartConversation />
            <MyCareer />
            {/* create a seperate page for displaying projects */}
            {/* <Projects /> */}
            <RecentBlogGrid />
            <MainContact />
            <Footer />
        </>
    )
}

export { Home }
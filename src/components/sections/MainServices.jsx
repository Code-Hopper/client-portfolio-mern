import React from 'react'
import { FaBullhorn, FaLaptopCode, FaCode } from "react-icons/fa";
import { TbDeviceMobileMessage } from "react-icons/tb";


const MainServices = () => {
    return (
        <>
            <div className="container-fluid bg-light py-5">
                <div className="container pb-5">
                    <div className='main-title-heros position-relative border border-2 border-secondary d-inline-block p-1 fw-bolder'>
                        <span> Services  <span className='bg-warning p-1'> Offered </span> </span>
                        <div className='bg-warning position-absolute start-0 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                        <div className='bg-warning position-absolute start-100 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                        <div className='bg-warning position-absolute start-0 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                        <div className='bg-warning position-absolute start-100 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                    </div>
                </div>
                <div className='container'>

                    <div className='row flex-md-row flex-column main-service-row g-5 g-md-3 '>
                        <div className="col service-card-col">
                            <div className='d-flex flex-column align-items-center gap-2 bg-light shadow-sm border-0 service-card p-3'>
                                <div className='service-card-icon bg-dark p-3 rounded-circle d-inline-block'>
                                    <FaLaptopCode className='text-warning' size={"30px"} />
                                </div>
                                <h4 className='fw-semibold'>Web Development</h4>
                                <div className='d-flex flex-wrap gap-1 justify-content-center'>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        E-Commerce Site
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        Portfolio
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        Landing Page
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        WordPress
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        Admin Dashboards
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        Gateway Integrations
                                    </span>
                                </div>
                                <button className='btn btn-warning'>Learn More</button>
                            </div>
                        </div>
                        <div className="col service-card-col">
                            <div className='d-flex flex-column align-items-center gap-2 bg-light shadow-sm border-0 service-card p-3'>
                                <div className='service-card-icon bg-dark p-3 rounded-circle d-inline-block'>
                                    <TbDeviceMobileMessage className='text-warning' size={"30px"} />
                                </div>
                                <h4 className='fw-semibold'>Mobile Development</h4>
                                <div className='d-flex flex-wrap gap-1 justify-content-center'>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        E-Commerce App
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        Management App
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        Collab Platforms
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        Custom
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        Data Collection
                                    </span>
                                </div>
                                <button className='btn btn-warning'>Learn More</button>
                            </div>
                        </div>
                        <div className="col service-card-col">
                            <div className='d-flex flex-column align-items-center gap-2 bg-light shadow-sm border-0 service-card p-3'>
                                <div className='service-card-icon bg-dark p-3 rounded-circle d-inline-block'>
                                    <FaBullhorn className='text-warning' size={"30px"} />
                                </div>
                                <h4 className='fw-semibold'>Digital Marketing</h4>
                                <div className='d-flex flex-wrap gap-1 justify-content-center'>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        SEO
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        SMM
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        Local SEO
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        Paid Ads
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        Oraganic Marketing
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        Lead Genrations 
                                    </span>
                                </div>
                                <button className='btn btn-warning'>Learn More</button>
                            </div>
                        </div>
                        <div className="col service-card-col">
                            <div className='d-flex flex-column align-items-center gap-2 bg-light shadow-sm border-0 service-card p-3'>
                                <div className='service-card-icon bg-dark p-3 rounded-circle d-inline-block'>
                                    <FaCode className='text-warning' size={"30px"} />
                                </div>
                                <h4 className='fw-semibold'>Teaching</h4>
                                <div className='d-flex flex-wrap gap-1 justify-content-center'>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        E-Commerce Site
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        Portfolio
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        Landing Page
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        WordPress
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        Admin Dashboards
                                    </span>
                                    <span className='bg-light border px-2 rounded-pill'>
                                        Gateway Integrations
                                    </span>
                                </div>
                                <button className='btn btn-warning'>Learn More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MainServices

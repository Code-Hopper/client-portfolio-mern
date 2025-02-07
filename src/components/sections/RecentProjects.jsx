import React from 'react'

import projectImage1 from "../media/projects/image1.png"
import projectImage2 from "../media/projects/image2.png"
import projectImage3 from "../media/projects/image3.png"
import { FaArrowRight } from 'react-icons/fa'

const RecentProjects = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='container py-4'>
                    <div className='position-relative border border-2 border-secondary d-inline-block p-1 fw-bolder'>
                        <span className='text-dark'> Recent  <span className='bg-warning p-1 text-dark'> Projects </span> </span>
                        <div className='bg-warning position-absolute start-0 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                        <div className='bg-warning position-absolute start-100 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                        <div className='bg-warning position-absolute start-0 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                        <div className='bg-warning position-absolute start-100 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5 bg-light">
                <div className="container">
                    <div className="recent-projects-block position-relative">

                        <div className="recent-project-category position-sticky top-0">
                            <div className='bg-dark text-warning p-2'>
                                <span className='fw-medium'>I did project in</span>
                            </div>
                            {/* Nav Tabs */}
                            <ul className='py-3 nav nav-tabs border-0 gap-2 d-flex flex-column' id="myTab" role="tablist">
                                <li className='nav-item bg-warning shadow-sm border-0' role="presentation">
                                    <a className='border-0 rounded-0 nav-link text-dark active' id="website-tab" data-bs-toggle="tab" href="#website" role="tab">
                                        Website
                                    </a>
                                </li>
                                <li className='nav-item bg-warning shadow-sm border-0' role="presentation">
                                    <a className='border-0 rounded-0 nav-link text-dark' id="digital-marketing-tab" data-bs-toggle="tab" href="#digital-marketing" role="tab">
                                        Digital Marketing
                                    </a>
                                </li>
                                <li className='nav-item bg-warning shadow-sm border-0' role="presentation">
                                    <a className='border-0 rounded-0 nav-link text-dark' id="web-apps-tab" data-bs-toggle="tab" href="#web-apps" role="tab">
                                        Web Apps
                                    </a>
                                </li>
                                <li className='nav-item bg-warning shadow-sm border-0' role="presentation">
                                    <a className='border-0 rounded-0 nav-link text-dark' id="mobile-apps-tab" data-bs-toggle="tab" href="#mobile-apps" role="tab">
                                        Mobile Apps
                                    </a>
                                </li>
                                <li className='nav-item bg-warning shadow-sm border-0' role="presentation">
                                    <a className='border-0 rounded-0 nav-link text-dark' id="desktop-apps-tab" data-bs-toggle="tab" href="#desktop-apps" role="tab">
                                        Desktop Apps
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Tab Content */}
                        <div className="recent-project-content tab-content mt-3 border-start px-5" id="myTabContent">

                            <div className='tab-pane fade show active' id='website' role="tabpanel">
                                <div className='project-container gap-4'>
                                    <div className="project-item position-relative">

                                        {/* cornner */}

                                        <div style={{ width: "15px", height: "15px" }} className='bg-warning position-absolute start-0 top-0 translate-middle'></div>
                                        <div style={{ width: "15px", height: "15px" }} className='bg-warning position-absolute start-100 top-0 translate-middle'></div>
                                        <div style={{ width: "15px", height: "15px" }} className='bg-warning position-absolute start-0 top-100 translate-middle'></div>
                                        <div style={{ width: "15px", height: "15px" }} className='bg-warning position-absolute start-100 top-100 translate-middle'></div>

                                        <div className='project-item-img'>
                                            <img className='img-fluid border' src={projectImage1} alt="project-item" />
                                        </div>
                                        <div className='project-item-content p-2 d-flex gap-3 align-items-start justify-content-center flex-column'>
                                            <div className='d-flex gap-1'>
                                                <span className='fw-bolder fs-4'>Portfolio Website</span>
                                            </div>
                                            <div className='d-flex flex-column gap-2'>
                                                <p className='text-secondary'>3 word discription for project</p>
                                                <div className='d-flex gap-2'>
                                                    <span className=''>Status</span>
                                                    <span>
                                                        <FaArrowRight />
                                                    </span>
                                                    <span className=''>Under Development</span>
                                                </div>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <span className='fw-bolder bg-light p-1 text-dark'>Tech Stack</span>
                                                    <span className=''>React.js & Node.js</span>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='btn btn-warning'>Check</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="project-item position-relative">

                                        {/* cornner */}

                                        <div style={{ width: "15px", height: "15px" }} className='bg-warning position-absolute start-0 top-0 translate-middle'></div>
                                        <div style={{ width: "15px", height: "15px" }} className='bg-warning position-absolute start-100 top-0 translate-middle'></div>
                                        <div style={{ width: "15px", height: "15px" }} className='bg-warning position-absolute start-0 top-100 translate-middle'></div>
                                        <div style={{ width: "15px", height: "15px" }} className='bg-warning position-absolute start-100 top-100 translate-middle'></div>

                                        <div className='project-item-img'>
                                            <img className='img-fluid border' src={projectImage2} alt="project-item" />
                                        </div>
                                        <div className='project-item-content p-2 d-flex gap-3 align-items-start justify-content-center flex-column'>
                                            <div className='d-flex gap-1'>
                                                <span className='fw-bolder fs-4'>Portfolio Website</span>
                                            </div>
                                            <div className='d-flex flex-column gap-2'>
                                                <p className='text-secondary'>3 word discription for project</p>
                                                <div className='d-flex gap-2'>
                                                    <span className=''>Status</span>
                                                    <span>
                                                        <FaArrowRight />
                                                    </span>
                                                    <span className=''>Deployed</span>
                                                </div>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <span className='fw-bolder bg-light p-1 text-dark'>Tech Stack</span>
                                                    <span className=''>React.js & Node.js</span>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='btn btn-warning'>Check</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='tab-pane fade' id='digital-marketing' role="tabpanel">

                                <div className='project-container gap-4'>
                                    <div className="project-item position-relative">

                                        {/* cornner */}

                                        <div style={{ width: "15px", height: "15px" }} className='bg-warning position-absolute start-0 top-0 translate-middle'></div>
                                        <div style={{ width: "15px", height: "15px" }} className='bg-warning position-absolute start-100 top-0 translate-middle'></div>
                                        <div style={{ width: "15px", height: "15px" }} className='bg-warning position-absolute start-0 top-100 translate-middle'></div>
                                        <div style={{ width: "15px", height: "15px" }} className='bg-warning position-absolute start-100 top-100 translate-middle'></div>

                                        <div className='project-item-img'>
                                            <img className='img-fluid border' src={projectImage3} alt="project-item" />
                                        </div>
                                        <div className='project-item-content p-2 d-flex gap-3 align-items-start justify-content-center flex-column'>
                                            <div className='d-flex gap-1'>
                                                <span className='fw-bolder fs-4'>Local SEO</span>
                                            </div>
                                            <div className='d-flex flex-column gap-2'>
                                                <p className='text-secondary'>Google My Business Listing Ranking</p>
                                                <div className='d-flex gap-2'>
                                                    <span className=''>Status</span>
                                                    <span>
                                                        <FaArrowRight />
                                                    </span>
                                                    <span className=''>Live</span>
                                                </div>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <span className='fw-bolder bg-light p-1 text-dark'>SEO</span>
                                                    <span className=''>Backlinking & Reviews</span>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='btn btn-warning'>Check</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='tab-pane fade' id='web-apps' role="tabpanel">
                                <p>web apps</p>
                            </div>
                            <div className='tab-pane fade' id='mobile-apps' role="tabpanel">
                                <p>mobile apps</p>
                            </div>
                            <div className='tab-pane fade' id='desktop-apps' role="tabpanel">
                                <p>desktop app</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { RecentProjects }

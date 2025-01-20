import React, { useEffect, useState } from 'react';

const MyCareer = () => {
    // const tabs = ['tab-2018', 'tab-2020', 'tab-2022', 'tab-2023', 'tab-2024']; // IDs of the tabs
    // const [activeIndex, setActiveIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActiveIndex((prevIndex) => (prevIndex + 1) % tabs.length); // Cycle through tabs
    //     }, 3000); // Change every 3 seconds

    //     return () => clearInterval(interval); // Cleanup interval on unmount
    // }, []);

    // useEffect(() => {
    //     const activeTab = document.getElementById(tabs[activeIndex]);
    //     if (activeTab) {
    //         activeTab.click(); // Programmatically click the tab to activate it
    //     }
    // }, [activeIndex]);

    return (
        <>
            <div className='container-fluid career-timeline-main-container'>
                <div className="container">
                    <span className='fw-bolder fs-3'>
                        Career Timeline
                    </span>
                </div>

                <div className="container career-timeline-action-container py-5">

                    <div className='row flex-column flex-md-row'>
                        <div className="col">
                            <div className='row flex-md-row flex-column gap-3'>
                                <div className="col time-stamps flex-grow-0">
                                    {/* Navigation Tabs */}
                                    <ul className="nav nav-tabs d-flex flex-md-column flex-row justify-content-center gap-4 border-0" id="careerTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="time-stamp-button active"
                                                id="tab-2018"
                                                data-bs-toggle="tab"
                                                data-bs-target="#career-2018"
                                            // aria-selected={activeIndex === 0}
                                            >
                                                2018
                                            </button>
                                        </li>

                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="time-stamp-button"
                                                id="tab-2021"
                                                data-bs-toggle="tab"
                                                data-bs-target="#career-2021"
                                                type="button"
                                            // aria-selected={activeIndex === 1}
                                            >
                                                2021
                                            </button>
                                        </li>

                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="time-stamp-button"
                                                id="tab-2020"
                                                data-bs-toggle="tab"
                                                data-bs-target="#career-2020"
                                                type="button"
                                            // aria-selected={activeIndex === 1}
                                            >
                                                2020
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="time-stamp-button"
                                                id="tab-2022"
                                                data-bs-toggle="tab"
                                                data-bs-target="#career-2022"
                                                type="button"
                                            // aria-selected={activeIndex === 2}
                                            >
                                                2022
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="time-stamp-button"
                                                id="tab-2023"
                                                data-bs-toggle="tab"
                                                data-bs-target="#career-2023"
                                                type="button"
                                            // aria-selected={activeIndex === 3}
                                            >
                                                2023
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="time-stamp-button"
                                                id="tab-2024"
                                                data-bs-toggle="tab"
                                                data-bs-target="#career-2024"
                                                type="button"
                                            // aria-selected={activeIndex === 4}
                                            >
                                                2024
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col time-stamp-content">
                                    {/* Tab Content */}
                                    <div className="tab-content" style={{textAlign: 'justify'}} id="careerTabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="career-2018"
                                        >
                                            <span className='fw-bolder fs-5'>Started with Coding and Tech</span>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi, repudiandae iure odit nulla qui quae expedita praesentium, nam molestias voluptatum adipisci sed nihil, eum quo repellendus! Quos similique laboriosam nisi eveniet praesentium esse? Ipsum est et ut, fugit nisi error? Atque ex quod commodi eaque nesciunt itaque ipsam dolore.</p>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="career-2020"
                                        >
                                            <p>Career for 2020</p>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="career-2021"
                                        >
                                            <p>Career for 2021</p>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="career-2022"
                                        >
                                            <p>Career for 2022</p>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="career-2023"
                                        >
                                            <p>Career for 2023</p>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="career-2024"
                                        >
                                            <p>Career for 2024</p>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="career-2025"
                                        >
                                            <p>Career for 2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <span className='fw-bolder fs-4'>Recent Projects</span>
                            <div className='recent-case-studies-grid'>
                                <div className='py-5 bg-light'> case 1 </div>
                                <div className='py-5 bg-light'> case 2 </div>
                                <div className='py-5 bg-light'> case 3 </div>
                                <div className='py-5 bg-light'> case 4 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyCareer;

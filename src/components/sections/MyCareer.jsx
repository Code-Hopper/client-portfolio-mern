import React from 'react';

import careerphoto from "../media/career.jpg"

const MyCareer = () => {

    return (
        <>
            <div className='container-fluid career-timeline-main-container'>
                <div className="container pb-4">
                    <div className='main-title-heros position-relative border border-2 border-secondary d-inline-block p-1 fw-bolder'>
                        <span> Career  <span className='bg-warning p-1'> Timeline </span> </span>
                        <div className='bg-warning position-absolute start-0 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                        <div className='bg-warning position-absolute start-100 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                        <div className='bg-warning position-absolute start-0 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                        <div className='bg-warning position-absolute start-100 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                    </div>
                </div>

                <div className="career-timeline-action-container py-5">
                    <div className="container-fluid">
                        <div className='row career-timeline-row py-3 flex-column flex-md-row'>
                            <div className="col career-image text-light fs-4 p-0 position-relative z-3" data-aos="zoom-in">
                                
                                <img className='img-fluid' src={careerphoto} alt="" />

                            </div>
                            <div className="col career-timeline-accordion position-relative" data-aos="zoom-in">
                                <div>
                                    <span className='fw-bolder fs-3'>
                                        Code, Solve, Create
                                    </span>
                                    <p className=''>
                                        A self-taught journey of endless possibilities!
                                    </p>
                                </div>
                                <div className='career-accordion'>

                                    <div className="accordion d-flex flex-column gap-1" id="career-accordion">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#2018-content">
                                                    2018 - Started to code
                                                </button>
                                            </h2>
                                            <div id="2018-content" className="accordion-collapse show" data-bs-parent="#career-accordion">
                                                <div className="accordion-body">
                                                    <span>content for 2020</span>
                                                    <p>
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint quam accusamus vel, quibusdam esse sequi consectetur in alias natus nisi ipsa voluptates beatae aliquid? Aliquam cumque unde sed sequi quis quae repudiandae iste id dicta dolores, eius officia ipsum non dolorem culpa soluta tempore sint itaque, impedit ab dolorum?
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#2020-content">
                                                   2020 - Freelencing 
                                                </button>
                                            </h2>
                                            <div id="2020-content" className="accordion-collapse collapse" data-bs-parent="#career-accordion">
                                                <div className="accordion-body">
                                                    content 2020
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#2021-content">
                                                    2021 - 
                                                </button>
                                            </h2>
                                            <div id="2021-content" className="accordion-collapse collapse" data-bs-parent="#career-accordion">
                                                <div className="accordion-body">
                                                    content - 2021
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#2022-content">
                                                    2022 - 
                                                </button>
                                            </h2>
                                            <div id="2022-content" className="accordion-collapse collapse" data-bs-parent="#career-accordion">
                                                <div className="accordion-body">
                                                    content - 2021
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#2023-content">
                                                    2023 - 
                                                </button>
                                            </h2>
                                            <div id="2023-content" className="accordion-collapse collapse" data-bs-parent="#career-accordion">
                                                <div className="accordion-body">
                                                    content - 2021
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#2024-content">
                                                    2024 - 
                                                </button>
                                            </h2>
                                            <div id="2024-content" className="accordion-collapse collapse" data-bs-parent="#career-accordion">
                                                <div className="accordion-body">
                                                    content - 2021
                                                    <span>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum vero corrupti, quas accusantium minima quaerat consectetur nesciunt natus perspiciatis ab. Repudiandae ipsa, corrupti magni quae non aliquid necessitatibus fugiat reprehenderit provident minima ratione facilis rerum odit blanditiis explicabo maxime et quis ab quam, aspernatur omnis. Eligendi pariatur quibusdam fuga itaque?
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyCareer;

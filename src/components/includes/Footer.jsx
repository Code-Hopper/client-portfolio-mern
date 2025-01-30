import React from 'react'

import { FaCode } from "react-icons/fa"

const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-black py-4 footer">
                <div className="container">
                    <div className="row gap-4 flex-column flex-md-row">
                        <div className="col flex-grow-1">
                            {/* logo */}

                            <div className="navbar-brand text-light d-flex align-items-center gap-2">
                                <div className="bg-warning rounded-circle position-relative" style={{ width: "40px", height: "40px" }}>
                                    <i className="text-dark fontawesome-family fa-solid fa-code position-absolute start-50 top-50 translate-middle"></i>
                                    <FaCode className='text-dark position-absolute start-50 top-50 translate-middle' />
                                </div>
                                <span>Code<span className="fw-bolder text-warning">Hopper</span></span>
                            </div>

                            <div className='text-light pt-3'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias possimus adipisci quidem expedita amet quae cumque esse accusantium, facere odit voluptates? Ipsa ex asperiores et at, temporibus beatae blanditiis nihil.
                                </p>
                            </div>

                        </div>
                        <div className="col-auto d-flex flex-column gap-4">
                            <h4 className='text-warning fw-bold'>Quick Links</h4>
                            <ul className='text-light quick-links-footer'>
                                <li>Web Development</li>
                                <li>Digital Marketing</li>
                                <li>App Development</li>
                                <li>Let's Collaborate</li>
                            </ul>
                        </div>
                        <div className="col flex-grow-1">
                            <div className='pb-4 text-md-end'>
                                <div className='position-relative border border-2 border-secondary d-inline-block p-1 fw-bolder'>
                                    <span className='text-light'>I Can Help You With </span>
                                    <div className='bg-warning position-absolute start-0 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                                    <div className='bg-warning position-absolute start-100 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                                    <div className='bg-warning position-absolute start-0 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                                    <div className='bg-warning position-absolute start-100 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                                </div>
                            </div>
                            <div className='d-flex gap-3 flex-wrap justify-content-start justify-content-md-end'>
                                <span className='p-2 bg-warning fw-semibold'>Website Development</span>
                                <span className='p-2 bg-warning fw-semibold'>Mobile Development</span>
                                <span className='p-2 bg-warning fw-semibold'>Digital Marketing</span>
                                <span className='p-2 bg-warning fw-semibold'>Visiting Faculty</span>
                                <span className='p-2 bg-warning fw-semibold'>SEO</span>
                                <span className='p-2 bg-warning fw-semibold'>Local SEO</span>
                                <span className='p-2 bg-warning fw-semibold'>SMO</span>
                                <span className='p-2 bg-warning fw-semibold'>Graphics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

import React, { useState } from 'react';
import herosImg from "../media/heros-img.png";
import { FaPenNib } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import StartWorkingPopUp from './StartWorkingPopUp';

const Heros = () => {
    // State to control popup visibility
    const [showPopup, setShowPopup] = useState(false);

    const openWorkPopUp = () => {
        setShowPopup(true);
    };

    const closeWorkPopUp = () => {
        setShowPopup(false);
    };

    return (
        <>
            <section id='heros'>
                <div className='container-fluid heros-container'>
                    <div className='container'>
                        <div className='row flex-column flex-md-row'>
                            <div className="col heros-text">
                                <div className='heros-main-container-text  d-flex flex-column justify-content-center  align-items-center  align-items-md-start gap-3'>
                                    <div className='main-title-heros position-relative border border-2 border-secondary d-inline-block p-1 fw-bolder'>
                                        <span> I can help you in ! </span>
                                        <div className='bg-warning position-absolute start-0 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                                        <div className='bg-warning position-absolute start-100 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                                        <div className='bg-warning position-absolute start-0 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                                        <div className='bg-warning position-absolute start-100 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                                    </div>

                                    <div className='fixed-column-type d-flex flex-column fw-bolder'>
                                        <h2 className='fw-bold text-warning'>
                                            <Typewriter
                                                options={{
                                                    strings: ['Creating Websites', 'Creating Mobile Apps', 'Promoting Business'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </h2>
                                    </div>

                                    <div className='d-none d-md-flex gap-2 justify-content-center'>
                                        <span>MERN Stack</span>
                                        <span className='text-warning'>*</span>
                                        <span>React Native</span>
                                        <span className='text-warning'>*</span>
                                        <span>WordPress</span>
                                        <span className='text-warning'>*</span>
                                        <span>SEO | SMM</span>
                                    </div>

                                    <p className='heros-secondary text-secondary text-center text-md-start'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at facere labore porro rem necessitatibus assumenda vel blanditiis soluta harum!
                                    </p>

                                    <div className='heros-cta'>
                                        <button className='btn btn-dark' onClick={openWorkPopUp} data-aos="slide-left">
                                            Let's start working <FaPenNib className='text-warning' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col heros-img">
                                <div className='heros-media-img-container w-100 h-100 z-3'>
                                    <img className='img-fluid heros-main-img' src={herosImg} alt="Hero" data-aos="slide-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popup Component */}
            {showPopup && <StartWorkingPopUp closePopup={closeWorkPopUp} />}
        </>
    );
}

export default Heros;
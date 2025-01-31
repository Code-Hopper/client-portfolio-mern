import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import { FaCode } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

// importing img for navbar dropdown
import img1 from "../media/navbar-imgs/img1.png"
import img2 from "../media/navbar-imgs/img2.png"
import img3 from "../media/navbar-imgs/img3.png"
import img4 from "../media/navbar-imgs/img4.png"

const Header = () => {

    let navigate = useNavigate()

    const handelGoTo = (to) => {
        navigate(to); // Replace with your target route
    };

    return (
        <>
            <section className='position-sticky top-0' style={{ zIndex: "10" }} id='header'>
                <div className="container-fluid bg-black">
                    <div className="container">
                        <nav className="navbar navbar-expand-md bg-black">

                            {/* logo */}

                            <div className="navbar-brand text-light d-flex align-items-center gap-2">
                                <div className="bg-warning rounded-circle position-relative" style={{ width: "40px", height: "40px" }}>
                                    <FaCode className='text-dark position-absolute start-50 top-50 translate-middle' />
                                </div>
                                <span>Code<span className="fw-bolder text-warning">Hopper</span></span>
                            </div>

                            {/* menu */}

                            <button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#main-menu">
                                <FaBars className='text-warning' />
                            </button>

                            <div className="offcanvas offcanvas-end" data-bs-backdrop="static" id="main-menu">

                                <div className="offcanvas-header bg-dark text-light">

                                    <span className="fw-bolder fs-3">Main-menu</span>
                                    <button className="btn btn-close bg-danger opacity-100 rounded-circle text-light" data-bs-dismiss="offcanvas"></button>

                                </div>

                                <div className="offcanvas-body bg-black position-relative">
                                    <ul className="navbar-nav m-auto text-center" id="nav-main-menu-1">
                                        <li className="nav-items">
                                            <Link className="nav-link text-light" to="/">Home</Link>
                                        </li>
                                        <li className="nav-items dropdown" id='main-menu-service-dropdown'>

                                            <button
                                                className="d-inline-block nav-link text-light dropdown-toggle text-center"
                                                data-bs-toggle="dropdown"
                                            >
                                                Services
                                            </button>

                                            <div className='dropdown-menu service-dropdown-container rounded shadow'>
                                                <div>
                                                    {/* web development | mobile app development | Digital Marketing | Collab */}
                                                    <div
                                                        className='navbar-service-dropdown-item'
                                                    >
                                                        <div className='dropdown-service-image-container' onClick={()=>handelGoTo("/service/web-development")}>
                                                            <img className='img-fluid' src={img1} alt="" />
                                                            <span className='text'>Website Devlopment</span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className='navbar-service-dropdown-item'
                                                    >
                                                        <div className='dropdown-service-image-container' onClick={()=>handelGoTo("/service/mobile-development")}>
                                                            <img className='img-fluid' src={img2} alt="" />
                                                            <span className='text'>Mobile Devlopment</span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className='navbar-service-dropdown-item'
                                                    >
                                                        <div className='dropdown-service-image-container' onClick={()=>handelGoTo("/service/digital-marketing")}>
                                                            <img className='img-fluid' src={img3} alt="" />
                                                            <span className='text'>Digital Marketing</span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className='navbar-service-dropdown-item'
                                                    >
                                                        <div className='dropdown-service-image-container' onClick={()=>handelGoTo("/service/professional-traning")}>
                                                            <img className='img-fluid' src={img4} alt="" />
                                                            <span className='text'>Professional Traning</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                        <li className="nav-items">
                                            <Link className="nav-link text-light" to="/">About Me</Link>
                                        </li>
                                        <li className="nav-items">
                                            <Link className="nav-link text-light" to="/">Projects</Link>
                                        </li>
                                        <li className="nav-items">
                                            <Link className="nav-link text-light" to="/">Blogs</Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            {/* navbar-cta */}

                            <div className="navbar-cta d-none d-md-flex align-items-center px-1 position-relative">
                                <div className='navbar-cta-icon text-light'>
                                    <IoIosSend size={"30px"} />
                                </div>
                                <button onClick={()=>handelGoTo("/getconnected")} className="btn fw-bolder btn-warning rounded-pill" type='button'>
                                    <span>Let's Talk</span>
                                </button>
                            </div>

                        </nav>
                    </div>
                </div>
            </section>
        </>
    )
}

export { Header }

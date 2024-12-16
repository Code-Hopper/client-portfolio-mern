import React from 'react'
import { Link } from "react-router-dom"
import { FaCode } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";


const Header = () => {
    return (
        <>
            <section id='header'>
                <div className="container-fluid bg-black">
                    <div className="container">
                        <nav className="navbar navbar-expand-md bg-black">

                            {/* logo */}

                            <div className="navbar-brand text-light d-flex align-items-center gap-2">
                                <div className="bg-warning rounded-circle position-relative" style={{ width: "40px", height: "40px" }}>
                                    <i className="text-dark fontawesome-family fa-solid fa-code position-absolute start-50 top-50 translate-middle"></i>
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
                                        <li className="nav-items" id='main-menu-service-dropdown'>
                                            <Link
                                                className="nav-link text-light dropdown-toggle text-center"
                                            >
                                                Services
                                            </Link>

                                            <div className='service-dropdown-container rounded shadow'>
                                                <span>service dropdown</span>
                                                {/* design a service section only of desktop */}
                                                <div className=''>

                                                </div>
                                            </div>

                                        </li>
                                        <li className="nav-items">
                                            <Link className="nav-link text-light" to="/">Projects</Link>
                                        </li>
                                        <li className="nav-items">
                                            <Link className="nav-link text-light" to="/">Blogs</Link>
                                        </li>
                                        <li className="nav-items">
                                            <Link className="nav-link text-light" to="/">About Me</Link>
                                        </li>
                                        <li className="nav-items">
                                            <Link className="nav-link text-light" to="/">Testimonials</Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            {/* navbar-cta */}

                            <div className="navbar-cta d-none d-md-flex bg-warning rounded-pill align-items-center px-1 position-relative">
                                <div className='navbar-cta-icon text-light'>
                                    <IoIosSend size={"30px"} />
                                </div>
                                <button className="btn fw-bolder">
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

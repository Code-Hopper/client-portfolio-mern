import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoExitOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {

    let [Admin, setAdmin] = useState({ name: 'ameykhondekar01@gmail.com' })

    let [showAdminDropdown, setShowAdminDropdown] = useState(false)

    return (
        <>
            <nav className='navbar navbar-dark navbar-expand bg-dark'>
                <div className='container-fluid'>
                    <div className='d-flex justify-content-between w-100'>
                        <div className=''>
                            <span className='text-light fw-bolder'>Dashboard</span>
                        </div>
                        <div className='text-light navbar-admin-action'>
                            <div className='dropdown-action-container' id='admin-account-action-dropdown'>
                                <button className='nav-link' onClick={() => setShowAdminDropdown(!showAdminDropdown)}>
                                    <span className='text-warning'>Welcome,</span> <span className='fw-bolder'> {Admin.name} ! </span> <IoMdArrowDropdown />
                                </button>
                                <div id="dropdown-menu-content" className={`dropdown-menu-content ${showAdminDropdown ? "show" : ""}`}>
                                    <div className='d-flex flex-column'>
                                        <div className='bg-light text-dark fw-bold p-3 d-flex align-items-center gap-3 justify-content-center'>
                                            <FaUserCircle size={"30px"} /> <span>My Account</span>
                                        </div>
                                        <button className='btn rounded-0 border-0 w-100 h-100 bg-danger text-light fw-bold p-3'>
                                            <span>Logout</span>
                                            <IoExitOutline size={"30px"} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

import React from 'react'

import { FiMail, FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaRedo, FaPaperPlane } from "react-icons/fa"


const MainContact = () => {
    return (
        <>
            <div className="container-fluid py-3">
                <div className="container">
                    <div className='py-4'>
                        <div className='position-relative border border-2 border-secondary d-inline-block p-1 fw-bolder'>
                            <span className=''> Get In <span className='bg-warning p-1 text-dark'> Touch </span> </span>
                            <div className='bg-warning position-absolute start-0 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                            <div className='bg-warning position-absolute start-100 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                            <div className='bg-warning position-absolute start-0 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                            <div className='bg-warning position-absolute start-100 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row flex-column flex-md-row gap-3 py-4">
                        <div className='col d-flex flex-column justify-content-end'>
                            
                            <div className='contact-details d-flex flex-column gap-1'>
                                <div className='py-3 px-1 d-flex gap-3 align-items-center justify-content-start'>
                                    <FiMail size={"35px"} />
                                    <span>ameykhondekar01@gmail.com</span>
                                </div>
                                <div className='py-3 px-1 d-flex gap-3 align-items-center justify-content-start'>
                                    <FiPhone size={"35px"} />
                                    <span>+91 9766696550</span>
                                </div>
                                <div className='py-3 px-1 d-flex gap-3 align-items-center justify-content-start'>
                                    <IoLocationOutline size={"35px"} />
                                    <span>WebSync Solution | Manewada road, Nagpur</span>
                                </div>
                            </div>

                            <div className='text-secondary p-3 bg-light'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, numquam blanditiis sunt dolore odio, rerum voluptates nesciunt non asperiores ab nobis distinctio unde consequatur neque adipisci hic, autem et. Odit
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iusto illum neque tempora quo rem ipsa. Cum repudiandae aliquid exercitationem.
                            </div>

                        </div>
                        <div className='col contact-form bg-light p-4 rounded-2'>
                            <form action="">
                                <div className='d-flex flex-column gap-3'>
                                    <div className='d-flex flex-column flex-md-row gap-2'>
                                        <div className='d-flex flex-grow-1'>
                                            <label className='p-2 bg-warning rounded-start' htmlFor="">Name</label>
                                            <input className='form-control rounded-start-0' type="text" name="" id="" />
                                        </div>
                                        <div className='d-flex flex-grow-1'>
                                            <label className='p-2 bg-warning rounded-start' htmlFor="">Phone</label>
                                            <input className='form-control rounded-start-0' type="number" name="" id="" />
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column gap-3'>
                                        <div className='d-flex flex-grow-1'>
                                            <label className='p-2 bg-warning rounded-start' htmlFor="">Email</label>
                                            <input className='form-control rounded-start-0' type="text" name="" id="" />
                                        </div>
                                        <div className='d-flex'>
                                            <label className='p-2 bg-warning rounded-start' htmlFor="">Service</label>
                                            <select className='form-select rounded-start-0'>
                                                <option value="">Web Development</option>
                                                <option value="">Digital Marketing</option>
                                                <option value="">Mobile App Development</option>
                                                <option value="">Teaching</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='d-flex flex-column'>
                                            <label className='p-2 bg-warning rounded-top' htmlFor="">Message</label>
                                            <textarea className='form-control rounded-top-0' name="" id="" rows={6}></textarea>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-2 justify-content-end'>
                                        <button className='btn btn-danger' type='reset'>Reset <FaRedo /> </button>
                                        <button className='btn btn-success' type='submit'>Submit <FaPaperPlane /> </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContact

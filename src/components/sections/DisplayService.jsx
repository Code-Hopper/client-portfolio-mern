import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

// fetch services

import { WebDevelopmentArray } from './ServiceData/Services.js';

// Service Data where all the main service blogs has written

const DisplayService = () => {

    const { service } = useParams();

    const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(false);

    console.log(service)

    let DisplayServiceItem = (service) => {

        return (
            <>
                <div id='service-item' key={service.service_id} className='service-model-items shadow bg-light rounded d-flex flex-column gap-3'>
                    <span className='service-item-title fw-bolder'>
                        {service.service_name}
                    </span>
                    <div className='service-item-discription'>
                        {service.service_description}
                    </div>
                    <div className='service-item-preks-container container-fluid'>
                        <div className='row'>
                            <div className="col-12 col-md-6">
                                <ul className='service-item-perks'>

                                    {

                                        service.service_perks.map((service_perk) => {
                                            return (
                                                <li>{service_perk}</li>
                                            )
                                        })

                                    }

                                </ul>
                            </div>
                            <div className="col-12 col-md-6 bg-dark rounded p-3 service-item-addons">
                                <h5 className='text-light service-item-addons-title'>Addons</h5>
                                <ul className='text-warning service-item-addons-perks fw-semibold'>

                                    {

                                        service.service_addon_perks.points.map((service_perk) => {
                                            return (
                                                <li>{service_perk}</li>
                                            )
                                        })

                                    }

                                </ul>
                                <span className='text-light service-item-addons-price'>Rs. {service.service_addon_perks.price}/-</span>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-warning d-inline-block p-2 rounded service-item-price' onClick={() => setIsSidebarOpenMobile(!isSidebarOpenMobile)}>
                        Starting from <span className='fw-bolder'>Rs.{service.service_price}/-</span> + (Optional Addons)
                    </button>
                </div>
            </>
        )

    }

    return (
        <>
            <div className='container-fluid service-page service-page-heros'>
                <div className="container py-5">
                    <div className='row flex-column flex-md-row gap-4'>
                        <div className="col d-flex flex-column gap-4">
                            <span className='text-warning fw-bolder  fs-1'>
                                {service}
                            </span>
                            <span className='fw-semibold text-light'>
                                Creating Website
                            </span>
                            <div className='text-light d-flex gap-2 align-items-center fw-medium'>
                                <span>Service</span>
                                <FaArrowRight />
                                <span>Web Development</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className='w-100 h-100 bg-dark rounded p-3 text-light'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service content */}
            <div className='container-fluid service-page-content'>
                <div className='container py-5 px-0'>
                    <div className='d-flex gap-5'>
                        <div className='flex-grow-1'>

                            <div className='service-content-title'>
                                <span className='fw-bolder fs-3'>Plans & Models</span>
                            </div>

                            <div className='service-page-content-plans-models'>

                                {/* map content here */}

                                {
                                    WebDevelopmentArray.map(DisplayServiceItem)
                                }

                            </div>

                        </div>
                        <aside id='quote-side-form' className={ isSidebarOpenMobile ? "service-get-quote flex-shrink-0 position-relative mobile-active" :  "service-get-quote flex-shrink-0 position-relative" }>
                            <div className='bg-light main-form shadow-sm'>
                                <div className='bg-dark text-light p-3 d-flex justify-content-between'>
                                    <span className='fw-bold '>Get Qoute</span>
                                    <button onClick={()=>setIsSidebarOpenMobile(false)} className='btn btn-close bg-danger d-block d-md-none'></button>
                                </div>
                                <div className='border p-2'>
                                    <form action="">
                                        <div className='d-flex gap-2 flex-column py-2'>
                                            <div>
                                                <span>Get Custom Qoute</span>
                                            </div>
                                            <div className='d-flex flex-column gap-2'>
                                                <div className='flex-grow-1'>
                                                    <label htmlFor="">Name</label>
                                                    <input className='form-control' type="text" placeholder='Name' />
                                                </div>
                                                <div className='flex-grow-1'>
                                                    <label htmlFor="">Phone</label>
                                                    <input className='form-control' type="tel" placeholder='Phone' />
                                                </div>
                                            </div>
                                            <div className='d-flex flex-column gap-2'>
                                                <div className='flex-grow-0'>
                                                    <label>Service</label>
                                                    <input className='form-control' type="text" value={service} disabled />
                                                </div>
                                                <div className='flex-grow-1'>
                                                    <label>Please Select Service Option</label>
                                                    <select className='form-select' name="" id="">
                                                        <option value="">Get data from actul file</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="">Leave a message</label>
                                                <textarea className='form-control' name="" id="" placeholder='Message'></textarea>
                                            </div>
                                            <div className='text-center'>
                                                <button className='btn btn-warning'>Get Qoute <FaArrowRight /></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DisplayService
import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import { WebDevelopmentArray, DigitalMarketingArray, MobileAppDevelopmentArray, ProfessionalTrainingArray } from './ServiceData/Services.js';

const DisplayService = () => {
    const { service } = useParams();
    const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(false);
    const [serviceArray, setServiceArray] = useState([]);

    const serviceCategories = {
        "web-development": WebDevelopmentArray,
        "digital-marketing": DigitalMarketingArray,
        "mobile-development": MobileAppDevelopmentArray,
        "professional-training": ProfessionalTrainingArray
    };

    useEffect(() => {
        const selectedService = serviceCategories[service] || [];
        setServiceArray(selectedService);
    }, [service]);

    const DisplayServiceItem = (serviceItem) => (
        <div key={serviceItem.service_id} className='service-model-items shadow border bg-light rounded d-flex flex-column gap-3'>
            <span className='service-item-title fw-bolder'>
                {serviceItem.service_name}
            </span>
            <div className='service-item-description'>
                {serviceItem.service_description}
            </div>
            <div className='service-item-preks-container container-fluid'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <ul className='service-item-perks'>
                            {serviceItem.service_perks.map((perk, index) => (
                                <li key={index}>{perk}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-12 col-md-6 bg-dark rounded p-3 service-item-addons'>
                        <h5 className='text-light service-item-addons-title'>Addons</h5>
                        <ul className='text-warning service-item-addons-perks fw-semibold'>
                            {serviceItem.service_addon_perks?.points?.map((perk, index) => (
                                <li key={index}>{perk}</li>
                            ))}
                        </ul>
                        <span className='text-light service-item-addons-price'>Rs. {serviceItem.service_addon_perks?.price}/-</span>
                    </div>
                </div>
            </div>
            <button className='btn btn-warning p-2 rounded service-item-price' onClick={() => setIsSidebarOpenMobile(!isSidebarOpenMobile)}>
                Starting from <span className='fw-bolder'>Rs.{serviceItem.service_price}/-</span> + (Optional Addons)
            </button>
        </div>
    );

    return (
        <>
            <div className='container-fluid service-page service-page-heros'>
                <div className='container py-5'>
                    <div className='row flex-column flex-md-row gap-4'>
                        <div className='col d-flex flex-column gap-4'>
                            <span className='text-warning fw-bolder fs-1'>{service}</span>
                            <span className='fw-semibold text-light'>
                                Creating Website - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </span>
                            <div className='text-light d-flex gap-2 align-items-center fw-medium'>
                                <span>Service</span>
                                <FaArrowRight />
                                <span>{service}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid service-page-content'>
                <div className='container py-5 px-0'>
                    <div className='d-flex gap-5'>
                        <div className='flex-grow-1'>
                            <div className='service-content-title'>
                                <span className='fw-bolder fs-3'>Plans & Models</span>
                            </div>
                            <div className='service-page-content-plans-models'>
                                {serviceArray.map(DisplayServiceItem)}
                            </div>
                        </div>
                        <aside id='quote-side-form' className={isSidebarOpenMobile ? "service-get-quote mobile-active" : "service-get-quote"}>
                            <div className='bg-light main-form shadow-sm'>
                                <div className='bg-dark text-light p-3 d-flex justify-content-between'>
                                    <span className='fw-bold '>Get Quote</span>
                                    <button onClick={() => setIsSidebarOpenMobile(false)} className='btn btn-close bg-danger d-block d-md-none'></button>
                                </div>
                                <div className='border p-2'>
                                    <form>
                                        <div className='d-flex gap-2 flex-column py-2'>
                                            <div><span>Get Custom Quote</span></div>
                                            <div className='d-flex flex-column gap-2'>
                                                <div><label>Name</label><input className='form-control' type='text' placeholder='Name' /></div>
                                                <div><label>Phone</label><input className='form-control' type='tel' placeholder='Phone' /></div>
                                            </div>
                                            <div className='d-flex flex-column gap-2'>
                                                <div><label>Service</label><input className='form-control' type='text' value={service} disabled /></div>
                                                <div><label>Please Select Service Option</label>
                                                    <select className='form-select'>
                                                        <option value=''>Get data from actual file</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div><label>Leave a message</label><textarea className='form-control' placeholder='Message'></textarea></div>
                                            <div className='text-center'><button className='btn btn-warning'>Get Quote <FaArrowRight /></button></div>
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

export default DisplayService;

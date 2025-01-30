import React from 'react';
import { FaArrowDown, FaPaperPlane, FaRedo } from "react-icons/fa";

const StartWorkingPopUp = ({ closePopup }) => {
    return (
        <>
            <div id='start-working-pop-up' className='popup-overlay'>
                <div className='work-pop-up-close-btn bg-danger d-inline-block p-2 rounded-circle border border-3 border-light'>
                    <button className='btn btn-close' onClick={closePopup}>
                    </button>
                </div>
                <div className='work-popup-content p-3'>
                    <div>
                        <p className='text-light fw-bolder'>
                            Let's connect !
                        </p>
                        <span className='text-secondary'>Please help me with few details so that i help you with <FaArrowDown /> </span>
                    </div>
                    <form action="">
                        <div className='py-3 d-flex flex-column gap-2'>
                            <div>
                                <select className='form-select' name="" id="">
                                    <option value="">Please Select Service</option>
                                    <option value="">Web Development</option>
                                    <option value="">Digital Marketings</option>
                                    <option value="">Mobile App Development</option>
                                    <option value="">Professional Traning</option>
                                    <option value="">Other</option>
                                </select>
                            </div>
                            <div className='d-flex gap-2 flex-column flex-md-row'>
                                <input className='form-control' type="text" placeholder='Name' />
                                <input className='form-control' type="email" placeholder='Email' />
                            </div>
                            <div>
                                <input type="tel" className='form-control' name="" id="" placeholder='Phone Number' />
                            </div>
                            <div className='d-flex gap-2 flex-column flex-md-row'>
                                <div className='flex-grow-0 d-flex gap-2 align-items-center'>
                                    <label className='text-light'>Can we meet ? </label>
                                    <input className='form-check' type="checkbox" name="" id="" />
                                </div>
                                <div className='flex-grow-1'>
                                    <input className='form-control' type="date" />
                                </div>
                            </div>
                            <div>
                                <textarea className='form-control' rows={4} name="" id="" placeholder='message'></textarea>
                            </div>
                            <div className='d-flex gap-2 justify-content-center'>
                                <button type='reset' className='btn btn-danger fw-bolder'>Reset <FaRedo /></button>
                                <button type='submit' className='btn btn-warning fw-bolder'>Submit <FaPaperPlane /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default StartWorkingPopUp;

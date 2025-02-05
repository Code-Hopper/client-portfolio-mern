import React, { useEffect, useState } from 'react';
import Toast from 'bootstrap/js/dist/toast';
import { FaPaperPlane } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

const QuickToast = () => {
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        AOS.init(); // Initialize AOS animations

        setTimeout(() => {
            setShowToast(true); // Set state to show toast after 4 sec
        }, 4000);
    }, []);

    useEffect(() => {
        if (showToast) {
            const toastElement = document.getElementById('liveToast');
            if (toastElement) {
                const toast = new Toast(toastElement, { autohide: false });
                toast.show();
            }
        }
    }, [showToast]); // Runs only when showToast changes

    return (
        <>
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                {showToast && (
                    <div
                        id="liveToast"
                        className="toast"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        data-aos="fade-up" // AOS animation applied when toast appears
                    >
                        <div className="toast-header bg-warning">
                            <strong className="me-auto">Quick Call Back</strong>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className='p-2'>
                            <form action="">
                                <div className='d-flex gap-2 flex-column'>
                                    <input className='form-control' type="text" placeholder='Name' />
                                    <input className='form-control' type="text" placeholder='Phone' />
                                    <select className='form-select'>
                                        <option value="">Web Development</option>
                                        <option value="">Mobile Development</option>
                                        <option value="">Digital Marketing</option>
                                        <option value="">Training</option>
                                    </select>
                                    <button className='btn btn-success'>
                                        <FaPaperPlane /> Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default QuickToast;
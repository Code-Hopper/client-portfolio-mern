import React, { useEffect } from 'react';
import Toast from 'bootstrap/js/dist/toast';
import { FaPaperPlane } from 'react-icons/fa';

const QuickToast = () => {
    useEffect(() => {
        const toastElement = document.getElementById('liveToast');
        const toast = new Toast(toastElement, { autohide: false });
        toast.show();
    }, []);

    return (
        <>
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div
                    id="liveToast"
                    className="toast"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
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
                                <select className='form-select' name="" id="">
                                    <option value="">Web Development</option>
                                    <option value="">Mobile Development</option>
                                    <option value="">Digital Marketing</option>
                                    <option value="">Training</option>
                                </select>
                                <button className='btn btn-success'>
                                    <FaPaperPlane />  submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuickToast;

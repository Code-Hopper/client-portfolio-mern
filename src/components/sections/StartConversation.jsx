import React from 'react'

import { FaMessage } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const StartConversation = () => {
    return (
        <>
            <div className='container-fluid bg-light py-5'>
                <div className="container text-center">
                    <Link to="/getconnected" className='btn rounded-pill btn-outline-dark fs-5 fw-semibold align-items-center'>
                        Start a Conversation <FaMessage />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default StartConversation

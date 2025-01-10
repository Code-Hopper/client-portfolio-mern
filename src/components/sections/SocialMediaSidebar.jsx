import React from 'react'
import { Link } from 'react-router-dom';

import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaChevronRight } from "react-icons/fa";


const SocialMediaSidebar = () => {
    return (
        <>
            {/* <!-- social media sidebar --> */}
            <div className="icon-bar d-flex align-items-center">
                <div className='social-media-bar-content'>
                    <Link href="https://www.facebook.com/AmpexCorporation" className="facebook">
                        <FaGithub />
                    </Link>
                    <Link href="#" className="twitter">
                        <FaLinkedin />
                    </Link>
                    <Link href="https://www.instagram.com/ampex_corpration/" className="google">
                        <FaInstagram />
                    </Link>
                    <Link href="#" className="linkedin">
                        <FaFacebook />
                    </Link>
                    <Link href="https://wa.me/918237895726" className="whatsapp">
                        <FaWhatsapp />
                    </Link>
                </div>
                <div className='social-media-target-button'>
                    <FaChevronRight />
                </div>
            </div>

        </>
    )
}

export default SocialMediaSidebar

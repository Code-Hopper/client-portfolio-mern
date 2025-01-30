import React from 'react'

import careerphoto from "../media/career.jpg"

const RecentBlogGrid = () => {
    return (
        <>
            <div className='container-fluid py-4'>
                <div className="container">
                    <div className='py-4'>
                        <div className='position-relative border border-2 border-secondary d-inline-block p-1 fw-bolder'>
                            <span className=''> Recent  <span className='bg-warning p-1 text-dark'> Blogs </span> </span>
                            <div className='bg-warning position-absolute start-0 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                            <div className='bg-warning position-absolute start-100 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                            <div className='bg-warning position-absolute start-0 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                            <div className='bg-warning position-absolute start-100 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='blog-grid-container'>
                        <div className='recent-blog-container recent-blog-1'>
                            <div className='recent-blog-thumbnail'>
                                <img src={careerphoto} alt="" />
                            </div>
                            <div className='recent-blog-extra'>
                                <div>
                                    <h3>Blog grid item heading contet 1</h3>
                                    <p>
                                        by admin 31/01/2025
                                    </p>
                                    <button className='btn btn-warning'>Read</button>
                                </div>
                            </div>
                        </div>
                        <div className='recent-blog-container recent-blog-2'>
                            <div className='recent-blog-thumbnail'>
                                <img src={careerphoto} alt="" />
                            </div>
                            <div className='recent-blog-extra'>
                                <div>
                                    <h3>Blog grid item heading contet 2</h3>
                                    <p>
                                        by admin 31/01/2025
                                    </p>
                                    <button className='btn btn-warning'>Read</button>
                                </div>
                            </div>
                        </div>
                        <div className='recent-blog-container recent-blog-3'>
                            <div className='recent-blog-thumbnail'>
                                <img src={careerphoto} alt="" />
                            </div>
                            <div className='recent-blog-extra'>
                                <div>
                                    <h3>Blog grid item heading contet 3</h3>
                                    <p>
                                        by admin 31/01/2025
                                    </p>
                                    <button className='btn btn-warning'>Read</button>
                                </div>
                            </div>
                        </div>
                        <div className='recent-blog-container recent-blog-4'>
                            <div className='recent-blog-thumbnail'>
                                <img src={careerphoto} alt="" />
                            </div>
                            <div className='recent-blog-extra'>
                                <div>
                                    <h3>Blog grid item heading contet 4</h3>
                                    <p>
                                        by admin 31/01/2025
                                    </p>
                                    <button className='btn btn-warning'>Read</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RecentBlogGrid

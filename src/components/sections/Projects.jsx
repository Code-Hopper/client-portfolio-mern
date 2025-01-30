import React from 'react'

const Projects = () => {
    return (
        <>
            <div className="container-fluid projects">

                <div className="container">
                    <div className='py-4'>
                        <div className='position-relative border border-2 border-secondary d-inline-block p-1 fw-bolder'>
                            <span className=''> Stack <span className='bg-warning p-1 text-dark'> Projects </span> </span>
                            <div className='bg-warning position-absolute start-0 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                            <div className='bg-warning position-absolute start-100 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                            <div className='bg-warning position-absolute start-0 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                            <div className='bg-warning position-absolute start-100 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    {/* creating project grid */}
                    <div className="row">
                        <div className="col">
                            
                        </div>
                        <div className="col">
                            
                        </div>
                        <div className="col">
                            
                        </div>
                        <div className="col">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects

import React from 'react'

const MainPreks = () => {
  return (
    <>
      <div className="container-fluid bg-dark position-relative z-n1">
        <div className="container p-2 text-light text-start">
          <span>Professional <span className='text-warning'> Developer & Trainer</span> </span>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container p-2 ">
          {/* create a 3 icons that will fade and then word will apear */}
          <div className='perks-title'>
            <h2 className='fw-bold perks-section-main-heading mt-5'> <span className='text-warning'>My</span> Expertise</h2>
            <ul className='pt-5 perks-points'>
              <li>Full-Stack Development & Responsive Design</li>
              <li>API Development & Integration</li>
              <li>Unique Value Propositions & Scalable Architecture</li>
              <li>Collaborative Process & Long-Term Support</li>
              <li>Strong Communication & Problem-Solving Mindset</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPreks

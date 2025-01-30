import React from 'react'

import { FaJava, FaPython, FaJs, FaBootstrap, FaReact, FaNodeJs, FaPhp, FaAndroid, FaUbuntu, FaFedora, FaAws, FaFigma, FaLinux, FaTerminal, FaGithub, FaSketch, FaSass } from 'react-icons/fa6'
import { SiExpress, SiMongodb, SiMysql, SiDotnet, SiApache, SiNginx, SiNetlify, SiAdobephotoshop, SiAdobeillustrator, SiCanva, SiVim } from "react-icons/si";
import { BiLogoJquery } from "react-icons/bi";

const AboutMe = () => {
  return (
    <>
      <div className='container-fluid py-5' id='about-me'>
        <div className="container">
          <div className="row gap-5 align-items-center">
            <div className="col text-light">
              <div className='py-4'>
                <div className='position-relative border border-2 border-secondary d-inline-block p-1 fw-bolder'>
                  <span className='text-light'> About  <span className='bg-warning p-1 text-dark'> Me </span> </span>
                  <div className='bg-warning position-absolute start-0 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                  <div className='bg-warning position-absolute start-100 top-0 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                  <div className='bg-warning position-absolute start-0 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                  <div className='bg-warning position-absolute start-100 top-100 translate-middle' style={{ width: "10px", height: "10px" }}></div>
                </div>
              </div>

              <p className='' style={{ textAlign: "justify" }}>
                Hello, my name is Amey Khondekar, and I am a self-taught developer passionate about creating innovative solutions through technology. I pride myself on being disciplined and upholding strong work ethics in every project I undertake.
              </p>
              <ul className='' style={{ fontSize: "0.8rem" }}>
                <li>Problem solver with the ability to simplify complex challenges.</li>
                <li>Strong teamwork skills for effective collaboration.</li>
                <li>Detail-oriented, ensuring high-quality outcomes in every task.</li>
              </ul>
            </div>
            <div className="col text-light">
              <span className="fw-bolder">My Tech Stack</span>
              <div className="d-flex flex-column gap-2 overflow-auto" style={{ maxWidth: "100%", whiteSpace: "nowrap" }}>
                <div className="d-flex gap-2 flex-wrap flex-md-nowrap overflow-x-auto justify-content-center">
                  <div className="tech-stack-tile shadow-sm bg-light p-2 text-dark rounded-pill d-flex gap-2 align-items-center">
                    <span>Coding</span>
                    <span><FaJs size={"24px"} /></span>
                    <span><FaJava size={"24px"} /></span>
                    <span><FaPython size={"24px"} /></span>
                    <span><FaPhp size={"24px"} /></span>
                    <span><FaAndroid size={"24px"} /></span>
                  </div>

                  <div className="tech-stack-tile shadow-sm bg-light p-2 text-dark rounded-pill d-flex gap-2 align-items-center">
                    <span>Frameworks</span>
                    <span><FaReact size={"24px"} /></span>
                    <span><SiExpress size={"24px"} /></span>
                    <span><FaBootstrap size={"24px"} /></span>
                    <span><BiLogoJquery size={"24px"} /></span>
                  </div>

                  <div className="tech-stack-tile shadow-sm bg-light p-2 text-dark rounded-pill d-flex gap-2 align-items-center">
                    <span>Database</span>
                    <span><SiMongodb size={"24px"} /></span>
                    <span><SiMysql size={"24px"} /></span>
                  </div>
                </div>

                <div className="d-flex gap-2 flex-wrap flex-md-nowrap overflow-x-auto justify-content-center">
                  <div className="tech-stack-tile shadow-sm bg-light p-2 text-dark rounded-pill d-flex gap-2 align-items-center">
                    <span>Env</span>
                    <span><FaNodeJs size={"24px"} /></span>
                    <span><SiDotnet size={"24px"} /></span>
                  </div>

                  <div className="tech-stack-tile shadow-sm bg-light p-2 text-dark rounded-pill d-flex gap-2 align-items-center">
                    <span>OS</span>
                    <span><FaUbuntu size={"24px"} /></span>
                    <span><FaFedora size={"24px"} /></span>
                  </div>

                  <div className="tech-stack-tile shadow-sm bg-light p-2 text-dark rounded-pill d-flex gap-2 align-items-center">
                    <span>Server Environment</span>
                    <span><SiApache size={"24px"} /></span>
                    <span><SiNginx size={"24px"} /></span>
                  </div>

                  <div className="tech-stack-tile shadow-sm bg-light p-2 text-dark rounded-pill d-flex gap-2 align-items-center">
                    <span>Cloud</span>
                    <span><SiNetlify size={"24px"} /></span>
                    <span><FaAws size={"24px"} /></span>
                  </div>
                </div>

                <div className="d-flex gap-2 flex-wrap flex-md-nowrap overflow-x-auto justify-content-center">
                  <div className="tech-stack-tile shadow-sm bg-light p-2 text-dark rounded-pill d-flex gap-2 align-items-center">
                    <span>Graphics</span>
                    <span><SiAdobephotoshop size={"24px"} /></span>
                    <span><SiAdobeillustrator size={"24px"} /></span>
                    <span><SiCanva size={"24px"} /></span>
                  </div>

                  <div className="tech-stack-tile shadow-sm bg-light p-2 text-dark rounded-pill d-flex gap-2 align-items-center">
                    <span>Designing</span>
                    <span><FaFigma size={"24px"} /></span>
                    <span><FaSketch size={"24px"} /></span>
                  </div>

                  <div className="tech-stack-tile shadow-sm bg-light p-2 text-dark rounded-pill d-flex gap-2 align-items-center">
                    <span>Additionals</span>
                    <span><FaLinux size={"24px"} /></span>
                    <span><FaTerminal size={"24px"} /></span>
                    <span><SiVim size={"24px"} /></span>
                    <span><FaGithub size={"24px"} /></span>
                    <span><FaSass size={"24px"} /></span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='py-3 text-center'>
            <button className='btn btn-outline-light fw-bolder'>Learn More</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default AboutMe

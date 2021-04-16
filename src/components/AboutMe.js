import React from 'react'
import HeadShot from '../images/HeadshotSQ.jpg';


import { FaFilePdf } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import { MdMail } from 'react-icons/md'

const AboutMe = () => {
    return (
        <div className="about-wrap">
            {/* <div className="row">
                <h1 className="about-jumbo">About Me</h1>
            </div> */}
            <div className="row">
                <div className="col-md-6">
                    <img className="keith-headshot" src={HeadShot} />
                </div>

                <div className="col-md-6">
                    <div className="profile-spacing">
                        <div className="row">
                            <h1 className="greeting">Keith, that's me!</h1>
                        </div>
                        <div className="row">
                            <p className="about-me">Earned a Bachelor of Commerce, majoring in Digital Business Management from Humber College. Shortly after, I learned to become a Full-Stack Developer through the Full-Stack Bootcamp at the University of Toronto.</p>
                            <p className="about-me">I combine the opportunities of polishing my marketing and user experience skills through my Degree, together with the skills of building applications from scratch from the Bootcamp.</p>
                            <p className="about-me">I look forward to being a part of this industry and making an impact by building great products.</p>
                        
                        </div>  
                        <div className="row">
                            <div className="col-4">
                                <div className="text-center pb-4 mt-4">
                                    <form action="https://github.com/keithyyy/" method="get" target="_blank" style={{width: "30%"}}>
                                        <button className="about-github"><SiGithub className="github-icon" size={24}/><span className="btn-text">View Repo</span></button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="text-center pb-4 mt-4"> 
                                    <form action="mailto:keith.crooc@gmail.com" target="_blank" style={{width: "30%"}}>
                                        <button className="about-mail"><MdMail className="mail-icon" size={24}/><span className="btn-text">Email</span></button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-4">

                                <div className="text-center pb-4 mt-4">
                                    <form action="../KeithCrooc-WebDevResume.pdf" target="_blank" style={{width: "30%"}}>

                                    <button className="about-resume"><FaFilePdf className="resume-icon" size={24}/><span className="btn-text">Resume</span></button>
                                    </form>
                                </div>
                            </div>

                            
                            
                        </div>
                    </div>
                </div>

            </div>
            

        </div>
    )
}

export default AboutMe

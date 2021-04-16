import React from 'react'
import HeadShot from '../images/HeadshotSQ.jpg';


import { FaFilePdf } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import { MdMail } from 'react-icons/md'

const AboutMe = () => {
    return (
        <div className="content-wrap">
            <div className="row">
                <h1 className="about-jumbo">About Me</h1>
            </div>
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
                            <p className="about-me">Earned a Bachelor of Commerce, majoring in Digital Business Management from Humber College. I had the opportunity to polish my marketing and user experience skills, which I also plan to highlight in my path as a web developer. I've successfully completed the Full-Stack Bootcamp at the University of Toronto to bring me up to speed.</p>
                            
                            <p className="about-me">I look forward to integrate further into the Tech industry by combining my experience in Web Development and Marketing to build great applications.</p>
                        
                        </div>  
                        <div className="row">
                            <div className="col-12">
                            <div className="text-center">
                                <button className="about-github"><SiGithub className="github-icon" size={24}/><span className="btn-text">View Repo</span></button>
                                <button className="about-mail"><MdMail className="mail-icon" size={24}/><span className="btn-text">Email</span></button>
                                <button className="about-resume"><FaFilePdf className="resume-icon" size={24}/><span className="btn-text">Resume</span></button>
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

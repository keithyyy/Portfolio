import React from 'react'
import FromScratchSS from '../images/projectSS/FromScratchSS.png'

import { SiHtml5, SiJavascript, SiCss3 } from 'react-icons/si'


const FromScratch = () => {
    return (
        <div className="project-wrapper">
            <div className="row">
                <div className="col-lg-6">
                    <div className="project-copy">
                        <h3 className="project-title">FromScratch</h3>
                        <p className="project-description">From Scratch is a website is a recipe box that allows the user to search for recipes and their nutritional facts. The user can keep track of their previous cooking adventure. This website uses two server-side APIs:</p>
                        <div className="button-holder">
                            <button className="githubBtn">Github Repo</button>
                            <button className="deployBtn">View Site</button>
                        </div>
                        <div className="technologies">
                            <h6>Technologies</h6>
            
                            <div className="logos">
                                
                                <SiJavascript style={{marginRight:"7px"}} size={30}/>
                                <SiCss3 style={{marginRight:"7px"}} size={30}/>
                                <SiHtml5 style={{marginRight:"7px"}} size={30}/>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img className="project-image" src={FromScratchSS}/>
                </div>
            </div>
        </div>
    )
}

export default FromScratch;
import React from 'react'
import MindShareSS from '../images/projectSS/MindShareSS.png'

import { FaReact, FaNodeJs,  } from 'react-icons/fa'
import { SiMaterialUi, SiHeroku, SiTravisci, SiMongodb } from 'react-icons/si'


const MindShare = () => {
    return (
        <div className="project-wrapper">
            <div className="row">
                <div className="col-lg-6">
                    <div className="project-copy">
                        <h3 className="project-title">MindShare</h3>
                        <p className="project-description">This application is a smart and interactive journal, where you are given daily questions that allows an algorithm to analyze your responses and display correlations between your mood and your behaviours. Allowing you to pinpoint what makes a good vs a bad day.</p>
                        <div className="button-holder">
                            <button className="githubBtn">Github Repo</button>
                            <button className="deployBtn">View Site</button>
                        </div>
                        <div className="technologies">
                            <h6>Technologies</h6>
            
                            <div className="logos">
                                <FaReact style={{marginRight:"7px"}} size={30}/>
                                <FaNodeJs style={{marginRight:"7px"}} size={30}/>
                                <SiMaterialUi style={{marginRight:"7px"}} size={30}/>
                                <SiTravisci style={{marginRight:"7px"}} size={30}/>
                                <SiHeroku style={{marginRight:"7px"}} size={30}/>
                                <SiMongodb style={{marginRight:"7px"}} size={30}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img className="project-image" src={MindShareSS}/>
                </div>
            </div>
        </div>
    )
}

export default MindShare

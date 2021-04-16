import React from 'react'

import { SiHtml5, SiJavascript, SiCss3, SiMysql, SiMongodb } from 'react-icons/si';
import { FaReact, FaNodeJs  } from 'react-icons/fa'


const Skills = () => {
    return (
        <div className="skills-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="skills-title text-center">Skills</h3>
                    </div>
                </div>
                
                <div className="row">

                    <div className="icons-container">
                        <div className="col-1"><SiHtml5 className="icon"/><p className="icon-label">HTML</p></div>
                        <div className="col-1"><SiCss3 className="icon"/><p className="icon-label">CSS</p></div>
                        <div className="col-1"><SiJavascript className="icon"/><p className="icon-label">Javascript</p></div>
                        <div className="col-1"><FaReact className="icon"/><p className="icon-label">React</p></div>
                        <div className="col-1"><FaNodeJs className="icon"/><p className="icon-label">NodeJS</p></div>
                        <div className="col-1"><SiMongodb className="icon"/><p className="icon-label">MongoDB</p></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills

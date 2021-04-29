import React from 'react'
import WindowShoppinSS from "../images/projectSS/WindowShoppin.png";

import { FaReact, FaNodeJs,  } from 'react-icons/fa'
import { SiHeroku, SiTravisci, SiBootstrap, SiMysql } from 'react-icons/si'


const openGithub = () => {
    window.open("https://github.com/keithyyy/WindowShoppin", '_blank').focus()
}
const openSite = () => {
    window.open("https://window-shoppin.herokuapp.com/", '_blank').focus()
}

const WindowShop = () => {
    return (

        <div className="project-wrapper-2">
            <div className="row">
                <div className="col-sm-6">
                    <div className="project-copy">
                        <h3 className="project-title">WindowShoppin</h3>
                        <p className="project-description">Window Shoppin brings all your online shopping items into one place.</p>
                        <div className="button-holder">
                            <button className="githubBtn" onClick={() => openGithub()}>Github Repo</button>
                            <button className="deployBtn" onClick={() => openSite()}>View Site</button>
                        </div>
                        <div className="technologies">
                            <h6>Technologies</h6>
            
                            <div className="logos">
                                <FaReact style={{marginRight:"7px"}} size={30}/>
                                <FaNodeJs style={{marginRight:"7px"}} size={30}/>
                                <SiBootstrap style={{marginRight:"7px"}} size={30}/>
                                <SiTravisci style={{marginRight:"7px"}} size={30}/>
                                <SiHeroku style={{marginRight:"7px"}} size={30}/>
                                <SiMysql style={{marginRight:"7px"}} size={30}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <img className="project-image" src={WindowShoppinSS}/>
                </div>
            </div>
        </div>
    )
}

export default WindowShop

import React from 'react'
import "./portfolio.css"
import Profile from '../../components/Profile';
import WindowShop from "../../components/WindowShop";
import MindShare from "../../components/MindShare";
import FromScratch from '../../components/FromScratch';



const Portfolio = () => {
    return (
        <>
            <div className="container">
                <Profile />


            
                <h4 className="projects-section-header"><span className="down-emoji" style={{marginRight: "1rem"}}>⬇️</span>Check out my projects  <span style={{marginLeft: "1rem"}}>⬇️</span></h4>
            </div>
            
            <MindShare />
            <div className="row">
                
            <WindowShop />
            </div>
            <FromScratch />

        </>
    )
}

export default Portfolio

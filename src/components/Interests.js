import React from 'react'
import LaptopIcon from "../images/emojis/man-computer-emoji.png";
import MegaphoneIcon from "../images/emojis/megaphone-emoji.png"

const Interests = () => {
    return (
        
        <>  
            <div className="row">
                <div className="col-6">
                    <img className="skill-emoji" src={LaptopIcon} />
                    <h4 className="skill-left">Full-Stack Developer</h4>
                </div>
                <div className="col-6">
                    <img className="skill-emoji" src={MegaphoneIcon} />
                    <h4 className="skill-right">Digital Marketer</h4>
                </div>
            </div>
        </>
    )
}

export default Interests

import React from 'react'
import Emoji from "../images/keithmoji.png"

const Profile = () => {
    return (
        <div className="content-wrap">
            <div className="row">

                <div className="col-md-6">
                    <div className="profile-spacing">
                  <div className="row"><h1 className="greeting">Hey there, I'm Keith!</h1>
                  </div>
                  <div className="row"><h6 className="about-me">Earned a Bachelor of Commerce, majoring in Digital Business Management from Humber College. I had the opportunity to polish my marketing and user experience skills, which I also plan to highlight in my path as a web developer. I am currently attending the Full-Stack Bootcamp at the University of Toronto to bring me up to speed.</h6></div>  
                    </div>
                </div>



                <div className="col-md-6">
                    <img className="keith-emoji" src={Emoji} />
                </div>
            </div>
        </div>
    )
}

export default Profile

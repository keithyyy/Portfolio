import React from 'react'
import Emoji from "../images/keithmoji.png"
import Interests from "./Interests"

const Profile = () => {
    return (
        <div className="content-wrap">
            <div className="row">

                <div className="col-md-6">
                    <div className="profile-spacing">
                  <div className="row"><h1 className="greeting">Hey there, I'm Keith!</h1>
                  </div>
                  <div className="row"><p className="about-me">Earned a Bachelor of Commerce, majoring in Digital Business Management from Humber College. I had the opportunity to polish my marketing and user experience skills, which I also plan to highlight in my path as a web developer. Completed the Full-Stack Bootcamp at the University of Toronto to bring me up to speed.</p></div>  
                    </div>
                </div>



                <div className="col-md-6">
                    <img className="keith-emoji" src={Emoji} />
                </div>

            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3 style={{marginBottom: "2rem", marginTop: "2rem"}}>I'm a...</h3>
                </div>
            </div>
            <Interests />

        </div>
    )
}

export default Profile

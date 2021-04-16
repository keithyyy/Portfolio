import React from 'react'
import Emoji from "../images/keithmoji.png"
import Interests from "./Interests"
import Skills from './Skills'

const Profile = () => {
    return (
        <div className="content-wrap">
            <div className="row">

                <div className="col-md-6">
                    <div className="profile-spacing">
                        <div className="row">
                            <h1 className="greeting">Hey there, <span className="name">I'm Keith!</span></h1>
                        </div>
                        <div className="row">
                            <p className="about-me-profile">Passionate about all things digital, from coding to the communications side of things. I aim to build the right products in the digital space that are easy and engaging to use.</p>
                        </div>  
                    </div>
                </div>



                <div className="col-md-6">
                    <img className="keith-emoji" src={Emoji} />
                </div>

            </div>

            <div className="row">
                <Skills />
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h3 style={{marginBottom: "2rem", marginTop: "2rem", fontFamily: "Heebo", fontSize: "50px"}}>I'm a...</h3>
                </div>
            </div>
            <Interests />

        </div>
    )
}

export default Profile

import React from 'react'
import about from './image/About-img.png'
import './Abouts.css'

function Abouts() {
    return (
        <>

            <div className="about-us">
                <div className="left">
                    <img src={about} alt="" />
                </div>
                <div className="right">
                    <h2>About us</h2>
                    <h2>AppFighter Services</h2>
                    <p>With our team of experts put your business on the fast tract With
                        our services.
                        AppFighter - We believe in marking technology work for you
                    </p>

                </div>
            </div>

          
         </>

    )
}

export default Abouts

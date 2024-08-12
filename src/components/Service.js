import React from 'react';
import cloud from './image/cloud.png'
import mobileapp from './image/mobile-app-develepment.png'
import webapp from './image/Web-app.jpg'
import './Service.css'

function Service() {
  return (
    <div className="service">
      <div className="service-item">
        <img src={mobileapp} alt="Mobile App Development" />
        <h2>Mobile App Development</h2>
        <p>Let us connect you to your customers on moblies.
          Put your bussiness in the palms of your customers with our
          team of iOS, Android and Windows Mobile experts.
        </p>
      </div>
      <div className="service-item">
        <img src={webapp} alt="Web-App Developement" />
        <h2>Web App Development</h2>
        <p>Let us transform your idea. Get customised web solutions specific
          to your business within weeks.
        </p>
      </div>
      <div className="service-item">
        <img src={cloud} alt="Cloud Solution" />
        <h2>Cloud Solutions</h2>
        <p>Let us provide you with personalised applications that can be exeecuted in real-time.
          Interact with your customers in a fast and simple way</p>
      </div>

    </div>



  )
}

export default Service;

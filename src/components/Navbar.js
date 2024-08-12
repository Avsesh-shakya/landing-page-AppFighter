import React from 'react'
// import './App.css';
import './Navbar.css';
import home from './image/home.jpg'


function Navbar() {
  return (
    <>
      <div className="navbar-up">
        <h4>Email us:contact@appfighter.com </h4>
        <h4>Contact us : 7450043261</h4>
      </div>
      <div className="nav-item">

        <ul>
          <li className='items'><a href="/home">Home</a></li>
          <li className='items'><a href="/services">Services</a></li>
          <li className='items'><a href="/clients">Clients</a></li>
          <li className='items'><a href="/works">Wroks</a></li>
          <li className='items'><a href="/contact">Contacts</a></li>
        </ul>
      </div>

      <div className="home-section">
        <div className="text-area ">

          <button className="home-btn">What we do</button>
          <h1>Web</h1>
          <h1>Development</h1>
          <p>We are the best webside developer in the town. we have so many talented programmer that can help to you make outsideing webside</p>
          <button className="btn-more-text">Learn More...</button>
        </div>
        
        <div className="right">
          <img className='home-img' src={home} alt="img" />
        </div>
      </div>

   

    </>



  )
}

export default Navbar;

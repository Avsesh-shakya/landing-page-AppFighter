import React from 'react'
import './Product.css'
import catering from './image/catering.jpg'
import clubbersApp from './image/clubbersApp.jpg'
import Invoicing from './image/invoicing.jpg'
import team from './image/team.jpeg'


function Product() {
    return (
        <>
            <div className="product">
                <h5>Products</h5>
                <h1>AppFighter Products</h1>
                <p>Our Suite of ERP,CRM and cloud solutions are packaged
                    to work with any business model.
                    Appreneurs.Co-Transform your business today!
                </p>
                <div className="product-service">
                    <div className="product-box">
                        <img src={catering} alt="" />
                        <h2>Catering Webside</h2>
                        <p>Do away with carbon copy papers and easliy
                            manage all your catering orders
                            Retrive and update orders in seconds.
                        </p>
                    </div>
                    <div className="product-box">
                        <img src={clubbersApp} alt="" />
                        <h2>Clabbers App</h2>
                        <p>Access out real-time directory of the on-going happy hours in Singapore. Have a great time without drying up your wallets</p>
                    </div>
                    <div className="product-box">
                        <img src={Invoicing} alt="" />
                        <h2>Invoicing Portal System</h2>
                        <p>Can your outers and invoices created in minutes, Never fret over the alignment and calculation mistake again!</p>
                    </div>
                </div>
            </div>

            <div className="team-work">
                <div className="inner-text">

                <h1>Let's Build Your Webside!</h1>
                <p>We will provide you the skillfully and designer that will make your webside great and outstanding!</p>
                <img src={team} alt="" />
                </div>
               

            



            </div>

        </>

     
    )
}

export default Product

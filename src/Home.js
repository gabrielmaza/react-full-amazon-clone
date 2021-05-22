import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">

                <img 
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Launches/Devices/March21/Fuji_TallHero_EchoDot_v2_es_US_1x._CB655761913_.jpg"
                    alt="..."
                />

                <div className="home__row">
                    <Product />
                    <Product />
               </div>

                <div className="home__row">
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div> 

                <div className="home__row">
                    {/* Product */}                    
                </div> 

            </div>
        </div>
    )
}

export default Home
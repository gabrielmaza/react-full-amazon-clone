import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <div className="home__imageContainer">
                    <img 
                        className="home__image"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Launches/Devices/March21/Fuji_TallHero_EchoDot_v2_es_US_1x._CB655761913_.jpg"
                        alt="..."
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="1"
                        title='Lorem ipsum dolor sit amet, consectetu' 
                        price={19.99} 
                        image="https://m.media-amazon.com/images/I/71H8OfamodL._AC_UY218_.jpg" 
                        rating={5}    
                    />
                    <Product 
                        id="2"
                        title='Lorem ipsum dolor sit amet, consectetu' 
                        price={19.99} 
                        image="https://m.media-amazon.com/images/I/712C0sFQCUL._AC_UY218_.jpg" 
                        rating={3}    
                    />
               </div>

                <div className="home__row">
                    <Product 
                        id="3"
                        title='Lorem ipsum dolor sit amet, consectetu' 
                        price={19.99} 
                        image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2309B35A28833317._V535730076_.jpg" 
                        rating={4}    
                    />
                    <Product 
                        id="4"
                        title='Lorem ipsum dolor sit amet, consectetu' 
                        price={19.99} 
                        image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2309C091815868RD._V535730079_.jpg" 
                        rating={5}    
                    />
                    <Product 
                        id="5"
                        title='Lorem ipsum dolor sit amet, consectetu' 
                        price={19.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/31c-2WuQAhL.jpg" 
                        rating={3}    
                    />

                </div> 

                <div className="home__row">
                    <Product 
                        id="123456"
                        title='Samsung QN32Q50RAFXZA Flat 32" QLED 4K Serie 32Q50 Smart TV' 
                        price={19.99} 
                        image="https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UY218_.jpg" 
                        rating={5}    
                    />
                </div> 

            </div>
        </div>
    )
}

export default Home
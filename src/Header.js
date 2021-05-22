import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <HomeIcon className="header__logoImage" />
            </div>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingCartIcon />
                    <span className="header_optionLineTwo header__basketCount">0</span>
                </div>
            </div> 

        </div>
    )
}

export default Header
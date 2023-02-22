import sneakerLogo from '../images/logo.svg';
import cartIcon from '../images/icon-cart.svg'
import cartIconOrange from '../images/icon-cart-orange.svg'
import closeIcon from '../images/icon-close.svg'
import menuIcon from '../images/icon-menu.svg'
import delIcon from '../images/icon-delete.svg'
import profileImage from '../images/image-avatar.png'
import {hideHoverBar,displayHoverBar} from "../utils/navUtils"
import { useState} from 'react';
import { useGlobalContext } from '../context';
import Cart from './Cart';
const Navbar =()=>{
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const {price, cartQuantity, productThumbs, clearCart} = useGlobalContext()

    return (
    <header>
        <div className="container">
            <nav>
                <div className="menu__wrapper">
                    <button className="menu" aria-label='menu' aria-expanded={mobileNavOpen} onClick={()=>{setMobileNavOpen(!mobileNavOpen)}}>
                        <img src={mobileNavOpen?closeIcon:menuIcon} alt="menuIcon" className="menu-ico" />
                    </button>
                    
                </div>
                <div className="logo__wrapper">
                    <img src={sneakerLogo} alt="Logo" className="logo" />
                </div>
                <div className={`nav-list__wrapper ${mobileNavOpen===false?'hide':''}`}>
                    <div className="nav-list">
                        <a href="#link" onMouseEnter={(e)=>displayHoverBar(e)} onMouseLeave={hideHoverBar} className="nav-link nav-first__link">Collections</a>
                        <a href="#link" onMouseEnter={(e)=>displayHoverBar(e)} onMouseLeave={hideHoverBar} className="nav-link">Men</a>
                        <a href="#link" onMouseEnter={(e)=>displayHoverBar(e)} onMouseLeave={hideHoverBar} className="nav-link">Women</a>
                        <a href="#link" onMouseEnter={(e)=>displayHoverBar(e)} onMouseLeave={hideHoverBar} className="nav-link">About</a>
                        <a href="#link" onMouseEnter={(e)=>displayHoverBar(e)} onMouseLeave={hideHoverBar} className="nav-link">Contact</a>
                        <a target="_blank" rel='noreferrer' href="https://github.com/osaaroh/44_ecommerce-product-page-react" onMouseEnter={(e)=>displayHoverBar(e)} onMouseLeave={hideHoverBar} className="nav-link">Source Code</a>
                        <div className="nav__hoverbar"></div>
                    </div>
                </div>
                <div className="cart-profile__wrapper">
                    <div className="cart-icon__wrapper" onClick={()=>{setCartOpen(!cartOpen)}}>
                        <img src={cartOpen?cartIconOrange:cartIcon} alt="cart" className="cart-icon"  />
                        <div className={`cart-qty__count ${cartQuantity>0?'':'hide'}`}><p>{cartQuantity}</p></div>
                    </div>
                    <img src={profileImage} alt="profile pic" className="profile-img" />
                </div>
                <Cart cartOpen = {cartOpen} cartQuantity={cartQuantity} productThumbs={productThumbs[0]} price={price} clearCart={clearCart} delIcon={delIcon} />
            </nav>
        </div>

    </header>
    )
}

export default Navbar
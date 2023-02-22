import sneakerLogo from '../images/logo.svg';
import cartIcon from '../images/icon-cart.svg'
import cartIconOrange from '../images/icon-cart-orange.svg'
import closeIcon from '../images/icon-close.svg'
import menuIcon from '../images/icon-menu.svg'
import delIcon from '../images/icon-delete.svg'
import profileImage from '../images/image-avatar.png'
import {hideHoverBar,displayHoverBar} from "../utils/navUtils"
import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import Cart from './Cart';
const Navbar =()=>{
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [isReized, setIsResized] = useState(0);
    const {price, cartQuantity, productThumbs, clearCart} = useGlobalContext()

    const isWindowMobileView=(navParams)=>{
        if (document.body.clientWidth <= 720 && navParams) {
            return { "display":"block"};
        } else if(document.body.clientWidth > 720){
            return {};
        } else {
            return {"display":"none"};
        }
    }
    

    /*Using useEffect to track screen resize and refresh component for navbar switch is a temporary fix 
    as it gives a performance hit. Working to replacing with a more efficient 
    solution*/
    useEffect(()=>{
        window.addEventListener("resize", function(event) {
            if (document.body.clientWidth <= 720 ) {
                setIsResized(0);
            }else{
                setIsResized(1)
            }
        },[isReized])
    })
    return (
    <header>
        <div className="container">
            <nav>
                <div className="menu__wrapper">
                    <img src={mobileNavOpen?closeIcon:menuIcon} alt="menuIcon" className="menu-ico" onClick={()=>{setMobileNavOpen(!mobileNavOpen)}}/>
                </div>
                <div className="logo__wrapper">
                    <img src={sneakerLogo} alt="Logo" className="logo" />
                </div>
                <div className="nav-list__wrapper" style={isWindowMobileView(mobileNavOpen)}>
                    <div className="nav-list">
                        <a href="#link" onMouseEnter={(e)=>displayHoverBar(e)} onMouseLeave={hideHoverBar} className="nav-link nav-first__link">Collections</a>
                        <a href="#link" onMouseEnter={(e)=>displayHoverBar(e)} onMouseLeave={hideHoverBar} className="nav-link">Men</a>
                        <a href="#link" onMouseEnter={(e)=>displayHoverBar(e)} onMouseLeave={hideHoverBar} className="nav-link">Women</a>
                        <a href="#link" onMouseEnter={(e)=>displayHoverBar(e)} onMouseLeave={hideHoverBar} className="nav-link">About</a>
                        <a href="#link" onMouseEnter={(e)=>displayHoverBar(e)} onMouseLeave={hideHoverBar} className="nav-link">Contact</a>
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
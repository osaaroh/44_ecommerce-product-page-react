import React from 'react';
import { useContext, useEffect, useState } from "react";

import imgProduct1 from './images/image-product-1.jpg';
import imgProduct1Thumb from './images/image-product-1-thumbnail.jpg';
import imgProduct2 from './images/image-product-2.jpg';
import imgProduct2Thumb from './images/image-product-2-thumbnail.jpg';
import imgProduct3 from './images/image-product-3.jpg';
import imgProduct3Thumb from './images/image-product-3-thumbnail.jpg';
import imgProduct4 from './images/image-product-4.jpg';
import imgProduct4Thumb from './images/image-product-4-thumbnail.jpg';

//1 create app context
const AppContext = React.createContext();

const AppProvider =({children})=>{
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const products = [imgProduct1,imgProduct2,imgProduct3, imgProduct4];
    const productThumbs = [imgProduct1Thumb,imgProduct2Thumb,imgProduct3Thumb, imgProduct4Thumb];
    const [currentProduct, setCurrentProduct] = useState(0);

    const [quantity, setQuantity]= useState(0);
    const [price, setPrice]= useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);

    useEffect(()=>{
        calculatePrice()
    },[cartQuantity])

    const prevProduct=(productNum)=>{
        if(productNum>0){
            setCurrentProduct(productNum-1)
        }else{
            setCurrentProduct(3)
        }
    }
    const nextProduct=(productNum)=>{
        if(productNum<3){
            setCurrentProduct(productNum+1)
        }else{
            setCurrentProduct(0)
        }
    }
    const increaseQty=()=>{
        setQuantity(quantity+1);
    }

    const reduceQty=()=>{
        if(quantity>0){
            setQuantity(quantity-1)
        }else{
            setQuantity(0)
        }
        
    }

    const addToCart=()=>{
        setCartQuantity(quantity);
    }

    const clearCart=()=>{
        setCartQuantity(0);
    }

    
    const calculatePrice =()=>{
        let priceVal = cartQuantity * 125;
        setPrice(priceVal);
    }

    return(
        <AppContext.Provider 
        value={{currentProduct, products, productThumbs, lightboxOpen, quantity, cartQuantity, price, increaseQty, reduceQty, setLightboxOpen, prevProduct, nextProduct, setCurrentProduct, addToCart, clearCart, calculatePrice}}
        >{children}
        </AppContext.Provider>
    )
}

// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider }
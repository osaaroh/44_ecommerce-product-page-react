const Cart =({cartOpen, cartQuantity, productThumbs, price, clearCart, delIcon})=>{
    return (
        <div className={`cart-content ${cartOpen?'':'modal-hide'}`}>
                    <h6 className="cart-content__title">Cart</h6>
                    {cartQuantity > 0 ? <>
                    <div className='cart-body'>
                        <img className='cart-body__thumbs' src={productThumbs} alt="" />
                        <div className='cart-body__text'>
                            <p>Fall Limited Edition Sneakers</p>
                            <p aria-live="polite">$125.00 x {cartQuantity} <span aria-label="total cost">${price}.00</span> </p>
                        </div>
                        <img className='cart-del__icon'src={delIcon} alt="" onClick={()=>{clearCart()}}/>
                    </div>
                    <button className="btn btn-primary btn-checkout" onClick={()=>{alert('Thank You! This is just a demo')}}>Checkout</button></>
                    : <div className='cart-body'>
                    <div className='cart-body__text'>
                        <p className='cart-body__text--empty'>Your cart is empty</p>
                    </div>
                </div>}
                    
                </div>
    )
}

export default Cart
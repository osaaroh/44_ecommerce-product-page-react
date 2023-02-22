import { useGlobalContext } from '../context';
import cartIcon from '../images/icon-cart-white.svg'
const AddItem =()=>{
    const {quantity, cartQuantity, increaseQty, reduceQty, addToCart} = useGlobalContext()
    return (
        <article className="product-details">
            <h2 className="product-details__title--small"> Sneaker Company</h2>
            <h1 className="product-details__title">Fall Limited Edition Sneakers</h1>
            <p className="product-details__content">  These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className="price-box">
                <div className="price__group">
                    <p className="price">$125.00</p>
                    <p className="price__percent-off">50%</p>
                </div>
                
                <p className="price-box__slashed">$250.00</p>
            </div>
            <div className="add-product__btns">
                <div className="product-quantity__btn-group">
                    <button className="btn btn-plus" onClick={()=>{increaseQty();}}>+</button>
                    <p className="product-details__quantity">{quantity}</p>
                    <button className="btn btn-minus"  onClick={()=>{reduceQty();}}>-</button>
                </div>
                <button className="btn btn-primary" onClick={()=>{addToCart()}}> <img src={cartIcon} alt="" />{cartQuantity>0?'Update Cart': 'Add to cart'} </button>
            </div>
            
        </article>
    )
}
export default AddItem;
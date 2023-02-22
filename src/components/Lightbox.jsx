import { useGlobalContext } from '../context';
const LightBox = () =>{
    const {currentProduct, products, productThumbs, prevProduct, nextProduct, lightboxOpen, setLightboxOpen, setCurrentProduct}= useGlobalContext()
    return (
        <div className={`lightbox__modal-bg ${lightboxOpen===false?'modal-hide':''}`}>
            <div className='lightbox__wrapper'>
                <div className="lightbox__icon-close--wrapper">
                    <div className="lightbox__icon-close" onClick={()=>{setLightboxOpen(false)}}></div>
                </div>
                <div className="lightbox__img--featured">
                    <div className="lightbox__icon-left--wrapper" onClick={()=>{prevProduct(currentProduct)}}>
                        <div className="lightbox__icon-left"></div>
                    </div>
                    <img src={products[currentProduct]} alt="" />
                    <div className="lightbox__icon-right--wrapper" onClick={()=>{nextProduct(currentProduct)}}>
                        <div className="lightbox__icon-right"></div>
                    </div>
                </div>
                <div className="lightbox__img--thumbnail">
                    <img src={productThumbs[0]} className={`${currentProduct===0?'img--active':''}`} alt="thumbnail" onClick={()=>{setCurrentProduct(0)}} />
                    <img src={productThumbs[1]} className={`${currentProduct===1?'img--active':''}`} alt="thumbnail" onClick={()=>{setCurrentProduct(1)}}/>
                    <img src={productThumbs[2]} className={`${currentProduct===2?'img--active':''}`} alt="thumbnail" onClick={()=>{setCurrentProduct(2)}}/>
                    <img src={productThumbs[3]} className={`${currentProduct===3?'img--active':''}`} alt="thumbnail" onClick={()=>{setCurrentProduct(3)}}/>
                </div>
            </div>
        </div>
    )
}

export default LightBox
import { useGlobalContext } from '../context';

const Gallery = () =>{
    const {currentProduct, products, productThumbs, prevProduct, nextProduct, setLightboxOpen, setCurrentProduct}= useGlobalContext()
    return (<div className='gallery'>
            <div className="gallery-img__controls-wrapper">
                <div className="lightbox__icon-left--wrapper" onClick={()=>{prevProduct(currentProduct)}}>
                        <div className="lightbox__icon-left"></div>
                    </div>
                <div className="gallery__img--featured">
                    <img src={products[currentProduct]} alt="" onClick={()=>{setLightboxOpen(true)}}/>
                </div>
                <div className="lightbox__icon-right--wrapper" onClick={()=>{nextProduct(currentProduct)}}>
                    <div className="lightbox__icon-right"></div>
                </div>
            </div>
            
            <div className="gallery__img--thumbnail">
                <img src={productThumbs[0]} alt="" onClick={()=>{setCurrentProduct(0)}} className={`${currentProduct===0?'img--active':''}`}/>
                <img src={productThumbs[1]} alt="" onClick={()=>{setCurrentProduct(1)}} className={`${currentProduct===1?'img--active':''}`}/>
                <img src={productThumbs[2]} alt="" onClick={()=>{setCurrentProduct(2)}} className={`${currentProduct===2?'img--active':''}`}/>
                <img src={productThumbs[3]} alt="" onClick={()=>{setCurrentProduct(3)}} className={`${currentProduct===3?'img--active':''}`}/>
            </div>
    </div>
    )
}

export default Gallery
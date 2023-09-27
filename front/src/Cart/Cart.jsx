import './Cart.scss'

function Cart(classNameWrapper, classNameImage, srcImage, imageClass) {
    return (
        <div className={classNameWrapper}>
            <div className={classNameImage}>
                <img className={imageClass} src={srcImage} alt="image-cart" />

            </div>

        </div>
    )

}

export default Cart;
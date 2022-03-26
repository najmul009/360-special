import React from 'react';
import './Product.css';
import { FaShoppingCart } from "react-icons/fa";

const Product = (props) => {
    const {name, price, img} = props.product
    const {addToCart} = props
    return (
        <div className='product' >
            <img className='' src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <h4 className='my-3'>Price: <span className='text-danger'> ${price}</span></h4>
            </div>
            <button  className='btn-cart' onClick={() => addToCart(props.product)}>
                <h5 className='btn-text py-2'>Add to Cart</h5> 
                <FaShoppingCart />
            </button>
        </div>
    );
};

export default Product;
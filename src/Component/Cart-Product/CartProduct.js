import React from 'react';
import './CartProduct.css'
import { FaTimesCircle } from "react-icons/fa";

const CartProduct = () => {
    return (
        <div className='d-flex justify-content-around'>
            <img src="https://cdn11.bigcommerce.com/s-1kqh9qmybo/images/stencil/1280x1280/products/32860/129350/856304004080__23827.1575690592.jpg?c=2" alt="" />
            <strong>xxx</strong>
            <button className='btn '>
                <FaTimesCircle/>
            </button>
        </div>
    );
};

export default CartProduct;
import React from 'react';
import './CartProduct.css'
import { FaTimesCircle } from "react-icons/fa";

const CartProduct = (props) => {
    const {img, title} = props.product
    return (
        <div className='d-flex d-flex justify-content-between align-items-center selected-item rounded-pill p-1 mx-3 my-1'>
            <img src={img} alt="/img" />
            <strong>{title}</strong>
            <button className='btn '>
                <FaTimesCircle/>
            </button>
        </div>
    );
};

export default CartProduct;
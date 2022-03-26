import React from 'react';
import CartProduct from '../Cart-Product/CartProduct';
import './Cart.css'

const Cart = () => {
    return (
        <div className='card my-5'>
            <div className='card-header'><h2>Lucky Cart</h2></div>
            <div className='card-body'>
                <CartProduct></CartProduct>
            </div>
            <button className='btn btn-primary mx-4 my-2'>chose one</button>
            <button className='btn btn-danger mx-4 my-1'>delet all</button>
            
        </div>
    );
};

export default Cart;
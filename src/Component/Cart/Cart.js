import React from 'react';
import CartProduct from '../Cart-Product/CartProduct';
import './Cart.css'



const Cart = (props) => {
    const {cartData,products} = props
    
    const selectedItem =[];
    cartData.forEach(id => {
        products.forEach(product => {
            if(product.id === id){
                selectedItem.push(product)
            }
        })
    })
    
    return (
        <div className='card my-5 sticky-top'>
            <div className='card-header'><h2>Lucky Cart</h2></div>
            <div className='card-body'>
                {
                    selectedItem.map(product => <CartProduct product={product} key={product.id}></CartProduct>)
                }
            </div>
            <button className='btn btn-primary mx-4 my-2'>chose one</button>
            <button className='btn btn-danger mx-4 my-1'>delet all</button>
            
        </div>
    );
};

export default Cart;
import React from 'react';
import CartProduct from '../Cart-Product/CartProduct';
import './Cart.css'



const Cart = (props) => {
    const {cartData,products ,deleteCart,luckyOne } = props
    
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
            <h5 className='text-danger'>"Chose only 4 guns."</h5>
            <div className='card-body'>
                {
                    selectedItem.map(product => <CartProduct product={product} key={product.id}></CartProduct>)
                }
            </div>
            <button className='btn btn-primary mx-4 my-2' onClick={() => luckyOne()}>chose one</button>
            <button className='btn btn-danger mx-4 my-1' onClick={() => deleteCart()} >delet all</button>
            
        </div>
    );
};

export default Cart;
import React, { useEffect, useState } from 'react';
import { addToStore, deleteShoppingCart, getShoppingCart, randomone } from '../../Utilits/CartData/CartData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(() => {
        const localStorCartData = getShoppingCart()
        setCart(localStorCartData)
    },[])
    
    // for click add 
    const addToCart=(product)=>{
        const itemCheck = addToStore(product.id)
        setCart(itemCheck)   
    }
    
    //remove from cart
    const removeCartData = ()=>{
        const emptyCart = deleteShoppingCart()
        setCart(emptyCart)
    }

    //choose random one
    const choseOne=()=>{
        const luckyOne = randomone()
        setCart(luckyOne)
    }
    return (
        <div className='shop-container'>
            
            <div className='shop'>
                
                {
                    products.map(product => <Product product={product} key={product.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className='shopping-cart'>
                <Cart cartData={cart} products={products}  deleteCart={removeCartData} luckyOne={choseOne}></Cart>
                
            </div>

            
        </div>
    );
};

export default Shop;
import React, { useEffect, useState } from 'react';
import { addToStore } from '../../Utilits/CartData/CartData';
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

    const addToCart=(product)=>{
        const itemCheck = addToStore(product.id)
        setCart(itemCheck)   
    }
    
    return (
        <div className='shop-container'>
            <div className='shop'>
                {
                    products.map(product => <Product product={product} key={product.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className='shopping-cart'>
                <Cart cartData={cart} products={products} ></Cart>
                
            </div>

            
        </div>
    );
};

export default Shop;
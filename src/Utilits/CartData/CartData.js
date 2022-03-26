//local stoager
const addToStore = (id)=>{
    let shoppingCart =[];

    //get cart 
    const storedCart = localStorage.getItem('shopping-cart');
    
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
        if(shoppingCart.length === 4){
            alert('You can not add more than 4 item!')
            return shoppingCart;
        }
        const matchItem = shoppingCart.find( localId => localId === id)
            if(matchItem){
                alert('item already exiest!')
                return shoppingCart;
            
            }
            else{
                shoppingCart.push(id)
                localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
                return shoppingCart;
            }
    }
    else{
        shoppingCart = [id]
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        return shoppingCart;
    }
    
}

const getShoppingCart = ()=>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        return shoppingCart;
    }
    else{
        const shoppingCart=[];
        return shoppingCart;
    }
    
}

const deleteShoppingCart = () => {
    let shoppingCart=[];
    localStorage.removeItem('shopping-cart');
    return shoppingCart;
}

const randomone = () => {
    let storedCartData = getShoppingCart()
    const dataLength = storedCartData.length
    storedCartData= [storedCartData[Math.floor(Math.random()*dataLength)]]
    return storedCartData;
}
export{addToStore, getShoppingCart,deleteShoppingCart,randomone}
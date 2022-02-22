import React from 'react';

const CartContext = React.createContext({
    products: [],
    totalAmount : 0,
    addProducts: (products) =>{},
    removeProducts: (products) => {} 
});

export default CartContext;
import React,{useReducer} from 'react';
import CartContext from './CartContext';

const defaultCartState = {
    products:[],
    totalAmount: 0
}
const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
 
        const existingCartProductsIndex = state.products.findIndex(products=>products.id===action.value.id);
        const existingCartProducts = state.products[existingCartProductsIndex];
        let updatedProducts;
        if(existingCartProducts){
            const updatedProducts = {
                ...existingCartProducts,
                amount: existingCartProducts.amount+action.value.amount
            }
            updatedProducts = [...state.products];
            updatedProducts[existingCartProductsIndex]= updatedProducts;
        }
        else{
            updatedProducts = state.products.concat(action.value)
        }
        const updatedAmount = state.totalAmount+ (action.value.price*action.value.amount);
        return {
            products: updatedProducts,
            totalAmount:updatedAmount
        }
    }
    if(action.type === 'REMOVE'){
        const existingCartProductsIndex = state.products.findIndex(products=>products.id===action.value);
        
        const existingCartProducts = state.products[existingCartProductsIndex];
        const updatedAmount = state.totalAmount- existingCartProducts.price;
        let updatedProducts;
        if(existingCartProducts.amount=== 1){

            updatedProducts = state.products.filter(products=> products.id !== action.value);
        }
        else{

                 const updatedProducts = {
                    ...existingCartProducts,
                    amount: existingCartProducts.amount-1
                }
                updatedProducts = [...state.items];
                updatedProducts[existingCartProductsIndex]= updatedProducts;
            }
           
    
        
        return {
            products: updatedProducts,
            totalAmount:updatedAmount
        }
    }
    return defaultCartState
}
const CartProvider = props => {
    const [cartState, dispatchCart] = useReducer(cartReducer,defaultCartState);
    const addProductsHandler = products =>{
        dispatchCart({
            type:'ADD',
            value: products
        })
    }
    const removeProductsHandler = id =>{
        dispatchCart({
            type:'REMOVE',
            value: id
        })
    }

    const cartContext = {
        products: cartState.products,
        totalAmount: cartState.totalAmount,
        addProducts: addProductsHandler,
        removeProducts: removeProductsHandler
    }
    
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
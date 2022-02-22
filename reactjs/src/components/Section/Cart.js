import React from "react";
import {useSelector} from 'react-redux'
import { addCart, delCart } from '../redux/action/index'
import { NavLink } from "react-router-dom";
import {  useDispatch} from "react-redux";


const Cart = () => {
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const handleDel = (item) => {
        dispatch(delCart(item))
    }

    const emptyCart = () => {
        return(
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }
    const cartItems = (product) => {
        return(
            <>
                <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img alt= {product.img}src={`https://codealo-commerce-cms.onrender.com${product.image.url} `}  height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">
                                {product.quantity} X ${product.price} = ${product.quantity * product.price}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={()=>handleDel(product)}>
                                ➖
                            </button>
                            <button className="btn btn-outline-dark" onClick={()=> handleAdd(product)}>
                                ➕
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )

    }
    const buttons = () => {
        return(
            <>
                <div className="container">
                    <div className="row">
                        <NavLink to="/payment" className="btn btn-outline-dark mb-5 w-25 mx-auto">
                         Payment
                        </NavLink>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && buttons()}
        </div>
    );
}

export default Cart;
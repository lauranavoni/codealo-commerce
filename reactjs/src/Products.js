import axios from "axios";
import {useEffect, useState } from "react";
import './styles.css';
import { NavLink } from "react-router-dom";


const Products = () => {


    const [products, setProducts]= useState ([]);

  useEffect (() => {
        axios
            .get("https://codealo-commerce-cms.onrender.com/products")
            .then (res => setProducts (res.data))
            .catch (error => console.log (error));
    
    }, []);

    return (
        <div style= {{display: 'flex',flexWrap :'wrap', justifyContent:'center' }} >
            {products.length > 0 &&
            products.map  (product=>(
        <div className="product_title">
        <h4>{product.title}</h4>
        <img 
         alt= {product.img}
         src={`https://codealo-commerce-cms.onrender.com${product.image.url} `}
            style ={{
                height:'100px',
                transition: 'all 0.5s ease',
                ':hover':{
                    cursor: 'pointer',
                    color: '#0D0055',
                    background: '#3E24A7',
                },
            }}
         />

        <div className="container">
        <p>${product.price}</p>
        <NavLink
         to={`/products/${product.slug}`}
        className="btn btn-outline-dark " style= {{ justifyContent:'center',color: '#ffffff',background: '#3E24A7',fontFamily: 'Poppins', }}
        > Add to Cart </NavLink>
        </div>
        </div>
        ))} 
         
        </div>

    );
}


export default Products;

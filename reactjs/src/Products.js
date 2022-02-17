import axios from "axios";
import {useEffect, useState } from "react";
import './styles.css';



const Products = () => {


    const [products, setProducts, addCart]= useState ([]);

  useEffect (() => {
        axios
            .get("https://codealo-commerce-cms.onrender.com/products")
            .then (res => setProducts (res.data))
            .catch (error => console.log (error));
    
    }, []);

    /*
    useEffect (() => {
        axios.get ("https://codealo-commerce-cms.onrender.com/products")
        .then (res=>{
            setProducts(res.data)
            cartCtxt.addProducts([res.data[0]])
        })
        .catch(error=>console.log(error));
    }*/


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
         <div className="product_description"  >
        <h4>{product.description}</h4></div>
        <div className="container">
        <p>${product.price}</p>
        <button onClick={()=> addCart(product._id)}>Add to cart</button>
        </div>
        </div>
        ))} 
         
        </div>

    );
}


export default Products;
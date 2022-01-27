import axios from "axios";
import { useEffect, useState } from "react";
import './styles.css';


const Products = () => {

    const [products, setProducts]= useState ([]);

    useEffect (() => {
        axios
            .get('https://codealo-commerce-cms.onrender.com/products')
            .then (res => setProducts (res.data))
            .catch (error => console.log (error));

    }, []);

    return (
        <div style= {{display: 'flex',flexDirection :'row' }} >
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
         <div className="product_description">
        <h4>{product.description}</h4></div>
        <p>{product.price}$</p>
        </div>
        ))}  
        </div>
    );
}

export default Products;
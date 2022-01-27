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
        <div>
            {products.length > 0 &&
            products.map (product=>(
        <div className="product_title">
        <h4>{product.title}</h4>
        <img 
         alt= {product.title}
         src={`https://codealo-commerce-cms.onrender.com${product.image.url} `}
            style ={{
                height:'100px'
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
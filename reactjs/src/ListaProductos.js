import axios from "axios";
import { useEffect, useState } from "react";

const ListaProductos =()=>{

    const [productos, SetProductos]= useState ([]);

    useEffect (() =>{
        axios.get('https://codealo-commerce-cms.onrender.com/products')
            .then (response => SetProductos (response.data))
            .catch (error => console.log (error));

    }, []);

return <div className="productos">

    {productos.length > 0 &&
    productos.map (producto=>(
    <div className="producto">
        <h4>{producto.title}</h4>
        <img 
         alt= {producto.title}
         src={`https://codealo-commerce-cms.onrender.com${producto.image.url} `}
       
         />
     
        <h4>{producto.description}</h4>
        <p>{producto.price}$</p>
    </div>
  ))}  
</div>;
}

export default ListaProductos;
import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Component/Products";
import Product from "./Component/Product";
import NavBar from "./Component/NavBar";


//const Home = () => import ("./Pages/Home");

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
      <Routes>
          <Route path="/" component={Home} />
          <Route path="/products" component={Products}/>
          <Route path="/products/:slug" component={Product}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

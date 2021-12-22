import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Screen/Home";
import SingleProduct from "./Screen/Single_Product";
import CartScreen from "./Screen/Cart_Screen";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/products/:id' children={<SingleProduct />}></Route>
        <Route exact path='/cart'>
          <CartScreen />
        </Route>
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;






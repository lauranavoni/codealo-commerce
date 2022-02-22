import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import {CartProvider} from './store/CartProvider'
import Footer from './components/Footer';




class App extends React.Component{
  render(){
    return(
      <CartProvider>
        <div className="app">
          <Router>
            <Header />
        
            <Section />
            <Footer/>
          </Router>
        </div>
      </CartProvider>
    );
  }
}

export default App;
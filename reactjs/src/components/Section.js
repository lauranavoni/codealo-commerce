import React, { Component } from 'react'
import Products from '../Products'
import Details from './Section/Details'
import {Route} from "react-router-dom"
import Cart from './Section/Cart'
import Payment from './Section/Payment'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Footer from './Footer'


export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Home} exact />
                    <Route path="/product" component={Products} exact  />
                    <Route path="/product/:id" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/payment" component={Payment} exact />
                    <Route path="/about"component={About} exact/>
                    <Route path="/contact"component={Contact} exact/>
                    <Route path="/footer"component={Footer} exact/>

            </section>
        )
    }
}

export default Section
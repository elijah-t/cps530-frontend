import React, { Component } from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Jumbotron from '../components/Jumbotron.js'

class Credits extends Component{
    render(){
        return(
            <div>
            <Navbar />
            <Jumbotron title="Credits" subtitle="Meet the Creators"/>
                <div className="container">
                <Footer />
                </div>
            </div>
        )
    }
}

export default Credits
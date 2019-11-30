import React, { Component } from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Jumbotron from '../components/Jumbotron.js'

class Tutorial extends Component{
    render(){
        return(
            <div>
            <Navbar />
            <Jumbotron title="Tutorial" subtitle="How to Create a Clean Page"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"></link> 

                <div className="container">
                
                <Footer />
                </div>
            </div>
        )
    }
}

export default Tutorial
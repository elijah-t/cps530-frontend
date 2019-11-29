import React, { Component } from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Jumbotron from '../components/Jumbotron.js'

class Conclusion extends Component{
    render(){
        return(
            <div>
            <Navbar />
            <Jumbotron title="Conclusion" subtitle="Our Framework Experience"/>
                <div className="container">
                
                <Footer />
                </div>
            </div>
        )
    }
}

export default Conclusion
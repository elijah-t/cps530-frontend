import React, { Component } from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Jumbotron from '../components/Jumbotron.js'


class Todo extends Component{
    render(){
        return(
            <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"></link> 
            <Navbar />
            <Jumbotron title="Todo List" subtitle="Our Django and React Application"/>
            <div className="container content">
                <div style={{textAlign:'center',fontSize:'30px'}}>
                <a href="http://ryersoncodemonkeys.tech:3001/">Todo List</a>
                </div>
            </div>
            </div>
        )
    }
}
export default Todo
import React, { Component } from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Jumbotron from '../components/Jumbotron.js'

class Todo extends Component{
    render(){
        return(
            <div>
            <Navbar />
            <Jumbotron title="Todo List" subtitle="Tryna get this shit run"/>
            <a href="http://ryersoncodemonkeys.tech:3001/">Todo List</a>
            </div>
        )
    }
}
export default Todo
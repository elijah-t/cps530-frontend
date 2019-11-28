import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="container">
                    <Link class="navbar-brand" to="/">CPS530 Project</Link>
                    <div class="collapse navbar-collapse" id="navbarsExample02">
                        <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">Link</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
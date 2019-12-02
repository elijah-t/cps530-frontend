import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="container">
                    <Link className="navbar-brand" to="/">CPS530 Project</Link>
                    <div className="collapse navbar-collapse" id="navbarsExample02">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/install">Install</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/tutorial">Tutorial</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/conclusion">Conclusion</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/credits">Credits</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/todo">Todo</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
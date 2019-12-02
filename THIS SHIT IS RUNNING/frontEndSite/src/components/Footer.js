import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component{
    render(){
        return(
            <footer className="footer mt-auto py-3">
                <div className="container">
                    <span className="text-muted">Created by Elijah Tungul, Miguel Nobre, and Tran Quy Linh Nguyen</span>
                </div>
            </footer>
        )
    }
}

export default Footer
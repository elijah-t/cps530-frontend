import React, { Component } from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Jumbotron from '../components/Jumbotron.js'

import './Credits.css'

import MiguelPic from '../Images/miguel.jpg'
import ElijahPic from '../Images/elijah.jpg'
import LinhPic from '../Images/linh.jpg'

class Credits extends Component{
    render(){
        return(
            <div>
            <Navbar />
            <Jumbotron title="Credits" subtitle="Meet the Creators"/>
                <div className="container">
                    <div className="column">
                        <img className="scale" src={ElijahPic}></img>
                        <p><strong>Elijah Tungul</strong>, front-end</p>
                    </div>
                    
                    <div className="column">
                        <img className="scale" src={MiguelPic}></img>
                        <p><strong>Miguel Nobre</strong>, back-end</p>
                    </div>
                    
                    <div className="column">
                        <img className="scale" src={LinhPic}></img>
                        <p><strong>Tran Quy Linh Nguyen</strong>, front-end</p>
                    </div>
                    

                    <h2>References:</h2>
                    <h4>React</h4>
                    <ul>
                        <li><a href="https://reactjs.org/">ReactJS</a></li>
                        <li><a href="https://www.taniarascia.com/getting-started-with-react/">Getting Started with React - An Overview and Walkthrough Tutorial</a></li>
                        <li><a href="https://scotch.io/starters/react/react-popularity-and-when-not-to-use-react">React Popularity and When Not to Use React</a></li>
                        <li><a href="https://insights.stackoverflow.com/survey/2019">Stack Overflow Developer Survey 2019</a></li>
                    </ul>
                    <h4>Django</h4>
                    <ul>
                        <li><a href="https://www.djangoproject.com/">Django</a></li>
                        <li><a href="https://www.djangoproject.com/start/">Getting Started with Django</a></li>
                        <li><a href="https://hackernoon.com/advantages-and-disadvantages-of-django-499b1e20a2c5">Advantanges and Disadvantages of Django</a></li>
                        <li><a href="https://insights.stackoverflow.com/survey/2019">Stack Overflow Developer Survey 2019</a></li>
                    </ul>
                    <br />
                    <br />
                    <br />
                <Footer />
                </div>
            </div>
        )
    }
}

export default Credits
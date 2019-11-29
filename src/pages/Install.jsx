import React, { Component } from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Jumbotron from '../components/Jumbotron.js'

import CDNLinks from '../Images/Screenshot_219.png'

class Install extends Component{
    render(){
        return(
            <div>
            <Navbar />
            <Jumbotron title="Installation" subtitle="Instructions"/>
                <div className="container">
                <h2>How to Install React</h2>
                <h4>Option 1: CDN Links</h4>
                <p>
                    A simple way to set up React is to use CDN links. If you've ever used
                    a library like jQuery, or a framework like Bootstrap, this method should
                    be familiar to you. If the words "Webpack, Babel, and Node.js" scare you,
                    then this method can be used (This method assumes you have basic knowledge
                    in HTML, CSS, and JavaScript.).
                </p>
                <p>
                    Create a basic <samp>index.html</samp> file. The three CDNs will be loaded in the <samp>head</samp> tag (React,
                    React DOM, and Babel).
                </p>
                <img className="container" src={CDNLinks}></img>
                <h4>Option 2: Node.js</h4>
                <p>
                    The recommended way to set up React is with Node.js. Node.js is a JavaScript 
                    runtime environment built on Chrome's V8 JavaScript engine.
                    <br />
                    <br />
                    <ol>
                        <li>Download and install <a href="https://nodejs.org/en/download/">Node.js</a>.</li>
                        <li>Once Node.js is installed, you can create a React app with Create React App.
                            For Create React App to run, you'll need Node >= 8.10 and npm >= 5.6 on your machine.
                            In your terminal, run the following: <br />
                            <code>
                                cd /preferred/directory <br />
                                npx create-react-app app-name <br />
                                cd app-name <br />
                                npm start <br />
                            </code>
                        </li>
                    </ol>
                </p>
                <h2>How to Install Django</h2>
                <p>
                    <ol>
                        <li>Since Django is a Python web framework, download and install <a href="https://www.python.org/downloads/">Python</a>.</li>
                        <br />
                        <li>
                            We will be creating a new virtual environment for Django. From 
                            terminal, install virtualenv with Python's package installer, pip.
                            <br />
                            <br />
                            <code>pip install virtualenv</code>
                            <br />
                            <br />
                        </li>
                        <li>
                            Create a new virtual environment with virtualenv:
                            <br />
                            <br />
                            <code>virtualenv myenv</code>
                            <br />
                            (myenv can be any name)
                        </li>
                        <br />
                        <li>
                            Activate the virtual environment using source.
                            <br />
                            <br />
                            <code>source myenv/bin/activate</code>
                            <br />
                            <br />
                        </li>
                        <li>
                            You can deactivate your virtual environment by running:
                            <br />
                            <br />
                            <code>deactivate</code>
                            <br />
                            <br />
                        </li>
                    </ol>
                </p>
                <br />
                <br />
                <Footer />
                </div>
            </div>
        )
    }
}

export default Install;
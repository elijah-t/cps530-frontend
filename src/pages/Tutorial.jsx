import React, { Component } from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Jumbotron from '../components/Jumbotron.js'

class Tutorial extends Component{
    render(){
        return(
            <div>
            <Navbar />
            <Jumbotron title="Tutorial" subtitle="How to Create a Clean Page with ReactJS and Django"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"></link> 

                <div className="container content">
                <h1>Prerequisites</h1>
                <p>To follow along this tutorial, you will need the following installed on your machine:</p>
                <ol>
                    <li>Python</li>
                    <li>Pip</li>
                    <li>Pipenv</li>
                </ol>
                <br />
                <h1>Setting up backend</h1>
                <p>Launch an instance of terminal and create the project's directory by running this command:</p>
                <code>$ mkdir django-todo-react</code>
                <br />
                <p>Now install Pipenv using pip and activate a new virutal environment</p>
                <code>$ pip install pipenv</code>
                <code>$ pipenv shell</code>
                <br />
                <p>Now install Django using Pipevn then create a new project</p>
                <code>$ pipenv install django</code>
                <code>$ django-admin startproject backend</code>
                <br />
                <p>Navigate into the newly created backend folder start a new aplication called 'your_app'.</p>
                <p>Also run migrations and try running the server</p>
                <code>$ cd backend</code>
                <code>$ python manage.py startapp your_app</code>
                <code>$ python manage.py migrate</code>
                <code>$ python manage.py runserver</code>
                <br />
                <h1>Setting up APIs</h1>
                <p><b>$ pipenv install djangorestframework django-cors-headers</b></p>
                <p>Add <b>rest_framework</b> and <b>corsheaders</b>to the installed applications.</p>
                <p>Open <b>settings.py</b> and update <b>INSTALLED_APPS</b> and <b>MIDDLEWARE</b> sections</p>
                <br />
                <h1>Setting up frontend</h1>
                <p>Install <b>create-react-app</b> CLI tool globally:</p>
                <code>$ npm install -g create-react-app</code>
                <br />
                <p>Redirect to working directory containing the application and create a new React application called frontend:</p>
                <code>$ create-react-app frontend</code>
                <br />
                <p>You can start the frontend server like this:</p>
                <code>$ cd frontend</code>
                <code>$ yarn start</code>
                <h3>The rest is up to you to work on your backend Django application and frontend display React</h3>
                <h1>GOOD LUCK!</h1>
                <br />
                <br />
                <br />
                <Footer />
                </div>
            </div>
        )
    }
}

export default Tutorial
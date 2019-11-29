import React, { Component } from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Jumbotron from '../components/Jumbotron.js'

import ReactPopularity from '../Images/Screenshot_217.png'
import DjangoLoved from '../Images/Screenshot_218.png'

class Home extends Component {
    render(){
        return(
            <div>
            <Navbar />
            <Jumbotron title="Our Frameworks" subtitle="About our used frameworks"/>
                <div className="container">
                    <br />
                    <h2>What is React?</h2>
                    <p>
                        React is a JavaScript library created by Facebook for 
                        building user interfaces. React can be used as a base in the
                        development of single-page or mobile applications, as it is optimal
                        for fetching rapidly changing data that needs to be recorded. Complex
                        React applications usually require the use of additional libraries for
                        state management, such as routing and interaction with an API.
                        Some features of React include the use of components, functional and class-based,
                        lifecycle methods, JSX, and React Hooks.
                        Companies that use React include Netflix, Facebook, Instagram, Airbnb, Dropbox,
                        Reddit, and more!
                    </p>
                    <h4>Popularity of React</h4>
                    <p>
                        According to the Stack Overflow Developer Survey of 2019, React is the 2nd most
                        popular web framework.
                        <img className="container-fluid" src={ReactPopularity}/>
                    </p>
                    <h4>Strengths and Weaknesses of React</h4>
                    <h5>Strengths</h5>
                    <p>
                        <dl>
                            <dt>Reusability of Components</dt>
                            <dd>
                                A web application can be made up of many different components, and React allows
                                you to split these pieces of UI into components. Components output small, reusable
                                pieces of code. This can help developers by making code easier to maintain. It also allows
                                for code to be built apon one another, like a stack of building blocks.
                            </dd>
                            <dt>Performance Enhancement</dt>
                            <dd>
                                React has a boost in performance because of the virtual DOM. The virtual DOM exists entirely
                                in memory, and is a representation of the browser's DOM. When a React component is created, the
                                component is not written directly to the DOM, instead using the virtual DOM, giving the developer
                                higher performance.
                            </dd>
                            <dt>JavaScript Library</dt>
                            <dd>
                                By having a large library at a developer's disposal, it provides them with the tools
                                they need to create many apps of their choosing.
                            </dd>
                        </dl>
                    </p>
                    <h5>Weaknesses</h5>
                    <p>
                        <dl>
                            <dt>Barrier of JSX (from HTML)</dt>
                            <dd>
                                JSX can be uncomfortable for those who are more versed in HTML. While JSX can be learned
                                quickly, the learning curve for unfamiliar developers can be daunting.
                            </dd>
                        </dl>
                    </p>
                    <h2>What is Django?</h2>
                    <p>
                        Django is a high-level Python Web framework that encourages 
                        rapid development and clean, pragmatic design. Built by experienced 
                        developers, it takes care of much of the hassle of Web development, 
                        so you can focus on writing your app without needing to reinvent the wheel. 
                        It’s free and open source. Some well-known companies that use Django include
                        PBS, Instagram, Spotify, YouTube, and Mozilla.
                    </p>
                    <h4>Popularity of Django</h4>
                    <p>
                        From the graph above, Django is the 8th most popular web framework. From a loved list
                        of the same survey, it ranks 6th.
                        <img className="container-fluid" src={DjangoLoved}/>
                    </p>
                    <h4>Strengths and Weaknesses of Django</h4>
                    <br/>
                    <br/>
                    
                <Footer />
                </div>
            </div>
        )
    }
}

export default Home;
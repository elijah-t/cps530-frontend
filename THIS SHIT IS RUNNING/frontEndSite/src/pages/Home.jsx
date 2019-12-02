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
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"></link> 

                <div className="container content">
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
                    <h5>Strengths</h5>
                    <p>
                        <dl>
                            <dt>Fully Loaded</dt>
                            <dd>
                                It works in a way that includes dozens of extras to help with user authentication, site maps,
                                content administration, RSS feeds and much more such things. These aspects help in carrying out
                                the web development process completely.
                            </dd>
                            <dt>Secure</dt>
                            <dd>
                            When you are doing it in Django, it is ensured that developers don’t commit any mistakes related to
                            security. Some of the common mistakes include SQL injection, cross-site request forgery, clickjacking
                            and cross-site scripting. To manage effectively usernames and passwords, the user authentication system
                            is the key. 
                            </dd>
                            <dt>Scalable</dt>
                            <dd>
                            To meet the heaviest traffic demand, the benefits of Django framework can be seen. Therefore, the busiest 
                            sites use this medium to quickly meet the traffic demands.
                            </dd>
                        </dl>
                    </p>
                    <h5>Weaknesses</h5>
                    <p>
                        <dl>
                            <dt>Regex Specification in URLs</dt>
                            <dd>You can create simple and easy-to-read URLs. However, Django uses regex to specify its URL routing patterns 
                                and that makes the code larger and creates complicated syntaxes. 
                            </dd>
                            <dt>Too monolithic</dt>
                            <dd>Django has a certain set of files and pre-defined variables. These pre-defined variables has to be learned
                                before create any project throught Django.
                            </dd>
                            <dt>Only handles 1 request at a time</dt>
                            <dd>WSGI-based servers cannot be utilized to develop real-time apps, as WSGI protocol is synchronous. WSGI
                                server can only handle 1 request at a time.
                            </dd>
                        </dl>
                    </p>
                    <p>.</p>
                    <br/>
                    <br/>
                    
                <Footer />
                </div>
            </div>
        )
    }
}

export default Home;
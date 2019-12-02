import React, { Component } from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Jumbotron from '../components/Jumbotron.js'

import StarSolid from '../Images/star-solid.svg'
import StarRegular from '../Images/star-regular.svg'

class Conclusion extends Component{
    render(){
        return(
            <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"></link>
            <Navbar />
            <Jumbotron title="Conclusion" subtitle="Our Framework Experience"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"></link> 
                <div className="container">
                {/* Conclusion for ReactJS*/}
                <br />
                <br />
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                ReactJS
                            </h1>
                            <img width={32} src={StarSolid} alt="star-solid"></img>
                            <img width={32} src={StarSolid} alt="star-solid"></img>
                            <img width={32} src={StarSolid} alt="star-solid"></img>
                            <img width={32} src={StarRegular} alt="star-regular"></img>
                            <img width={32} src={StarRegular} alt="star-regular"></img>

                            <h2 className="subtitle">
                                ReactJS took some time to get used to and understand. However it was very interesting
                                overall. It did exactly what it was expected to do. Though its structure is very different from what
                                we have done is this course so far, it is easy to use once used to it. 
                            </h2>
                            
                        </div>
                    </div>

                </section>

                {/* Conclusion for Django*/}
                <section className="hero is-danger">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Django
                            </h1>
                            <img width={32} src={StarSolid} alt="star-solid"></img>
                            <img width={32} src={StarSolid} alt="star-solid"></img>
                            <img width={32} src={StarRegular} alt="star-solid"></img>
                            <img width={32} src={StarRegular} alt="star-regular"></img>
                            <img width={32} src={StarRegular} alt="star-regular"></img>
                            <h2 className="subtitle">
                                Django was difficult to install and configure and it was difficult to even create a project. Had to change a lot
                                of Visual Studio Code settings to create an environment and run the project with Django.
                            </h2>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </section>

                {/* Conclusion for Bulma*/}
                <section className="hero is-light">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Bulma
                            </h1>
                            <img width={32} src={StarSolid} alt="star-solid"></img>
                            <img width={32} src={StarSolid} alt="star-solid"></img>
                            <img width={32} src={StarSolid} alt="star-solid"></img>
                            <img width={32} src={StarRegular} alt="star-regular"></img>
                            <img width={32} src={StarRegular} alt="star-regular"></img>
                            <h2 className="subtitle">
                                Bulma was easy to configure and use. It was so also interesting to learn
                                because it actually helped change the look of our website. However, Bulma messes with 
                                regular HTML expressions which took quite some time to figure out an equivalent in Bulma's
                                syntax. Some of the regular HTML syntax was disabled and Bulma did not have an equivalent
                                expression.
                            </h2>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <br />
                <Footer />
            </div>
            </div>
        )
    }
}

export default Conclusion
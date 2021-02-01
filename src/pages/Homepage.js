import React from 'react';
import GreenEye from './../assets/green.png';
import UN from './../assets/un.png';
import Game from './../assets/game.png';
import { Link } from 'react-router-dom';


export default function Homepage() {

    return (
        <>
            <div className="home__container">
                <div className="home__wrapper">
                    <div id="typedText" className="css-typing p">
                        <p>let greeting = 'Welcome.';</p>
                        <p>console.log(greeting);</p>
                        <span></span>
                    </div>
                    <div className="mobile__front">
                        <h1 >Welcome.</h1>
                        <p >This is my portfolio</p>
                    </div>
                </div>
            </div>


            <div className="project">

                <section id="section1" className="project__section">
                    <div className="project__container">
                        <div className="project__block">
                            <div className="project__texts">
                                <h2>Semester Project 2020</h2>
                                <p>This project was about making a game to test our JavaScript skills. I got an A on this project.
                                I was not focusing as much on the design for this project because the programming was my critical part of the project.</p>
                                <p><a href="http://www.lynetteaglen.com/gameofgnomes/Code/" className="effect-underline">View Project</a></p>
                            </div>
                        </div>
                        <div className="project__img-block">
                            <div className="grid-image image-1 active"><img className="project-image__img1" src={Game} alt="Game of Gnomes" /></div>
                        </div>
                    </div>
                </section>

                <section id="section2" className="project__section">
                    <div className="project__container">
                        <div className="project__block">
                            <div className="project__texts">
                                <h2>Exam 2019</h2>
                                <p>This project lasted for 4 weeks. I worked with a real client and got to experience how it is to cooperate and
                                    work with a client. </p>
                                <p><a href="http://www.lynetteaglen.com/project_exam/Code/" className="effect-underline">View Project</a></p>
                            </div>
                        </div>
                        <div className="project__img-block">
                            <div className="grid-image image-1 active"><img className="project-image__img2" src={GreenEye} alt="Green Eye" /></div>
                        </div>
                    </div>
                </section>

                <section id="section3" className="project__section">
                    <div className="project__container">
                        <div className="project__block">
                            <div className="project__texts">
                                <h2>Semester Project 2019</h2>
                                <p>First semester project at my school. We had to recreate a website for UN Student Association in Norway. </p>
                                <p><a href="http://www.lynetteaglen.com/semesterproject/index.html" className="effect-underline">View Project</a></p>
                            </div>
                        </div>
                        <div className="project__img-block">
                            <div className="grid-image image-1 active"><img className="project-image__img3" src={UN} alt="UN Student Association" /></div>
                        </div>
                    </div>
                </section>

            </div>


            <div className="home__information">

                <div className="home__paragraph">
                    <h1>Design is more than just principles</h1>
                    <p>If functionality, simplicity and user experience is given attention, I truly believe you are on a road to a great design.</p>
                </div>

                <div className="home__button">
                    <p><a className="effect-underline"><Link to="/Contact">Have any questions?</Link></a></p>

                </div>

            </div>

        </>
    )
}
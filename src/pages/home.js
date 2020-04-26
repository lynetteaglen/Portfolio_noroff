import React, { useState } from 'react';
import GreenEye from './../assets/green.png';
import UN from './../assets/un.png';
import Game from './../assets/game.png';


export default function Home() {

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
                    <div class="project__container">
                        <div class="project__block">
                            <div class="project__texts">
                                <h2>Semester Project 2020</h2>
                                <p>This project was about making a game to test our JavaScript skills. I got an A on this project.
                                I was not focusing as much on the design for this project because the programming was my critical part of the project.</p>
                                <p><a href="#" class="effect-underline">view project</a></p>
                            </div>
                        </div>
                        <div class="project__img-block">
                            <div class="grid-image image-1 active"><img className="project-image__img1" src={Game} alt="Game of Gnomes" /></div>
                        </div>
                    </div>
                </section>

                <section id="section2" className="project__section">
                    <div class="project__container">
                        <div class="project__block">
                            <div class="project__texts">
                                <h2>Exam 2019</h2>
                                <p>This project lasted for 4 weeks. I worked with a real client and got to experience how it is to cooperate and
                                    work with a client. </p>
                                <p><a href="#" class="effect-underline">view project</a></p>
                            </div>
                        </div>
                        <div class="project__img-block">
                            <div class="grid-image image-1 active"><img className="project-image__img2" src={GreenEye} alt="Green Eye" /></div>
                        </div>
                    </div>
                </section>

                <section id="section3" className="project__section">
                    <div class="project__container">
                        <div class="project__block">
                            <div class="project__texts">
                                <h2>Semester Project 2019</h2>
                                <p>First semester project at my school. We had to recreate a website for UN Student Association in Norway. This project displays what</p>
                                <p><a href="#" class="effect-underline">view project</a></p>
                            </div>
                        </div>
                        <div class="project__img-block">
                            <div class="grid-image image-1 active"><img className="project-image__img3" src={UN} alt="UN Student Association" /></div>
                        </div>
                    </div>
                </section>

            </div>


            <div className="home__information">

                <div className="home__box1">
                    <h2>Minimalism</h2>
                    <p>I am very fond of minimalism as an art. It gives you time to breath. On websites I truly believe that less is more, and
                    by keeping things minimalistic and removing distractions is by far my most favorite designs.
                    </p>
                </div>

                <div className="home__box2">
                    <h2>Intuitive</h2>
                    <p>The user should be experiencing the visit on a website as effortless. There should be no wasted clicks or having to conciously reason for what you are doing. The interaction should just in a state of flow.</p>
                </div>

                <div className="home__box3">
                    <h2>Functionality</h2>
                    <p>A great design is a design that is functional. What is a website if its' loading capacity is slow, or even worse, not clickable? The functions of a website should serve its purpose well.
                    </p>
                </div>


                <div className="home__button">
                    <p><a href="#" class="effect-underline">Have any questions?</a></p>
                </div>

            </div>




        </>
    )
}
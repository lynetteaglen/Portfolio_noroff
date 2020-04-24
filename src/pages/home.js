import React, { useState } from 'react';
import GreenEye from './../assets/green.png';
import UN from './../assets/un.png';
import Game from './../assets/game.png';


export default function Home() {


    const clearDiv = (typedText) => {
        document.getElementById(typedText).innerHTML = "Welcome.";
    }

    return (
        <>
            <div className="home__container">
                <div className="home__wrapper">
                    <div id="typedText" className="css-typing p">
                        <p>let greeting = 'Welcome.';</p>
                        <p>console.log(greeting);</p>
                    </div>
                </div>
            </div>
            {/*  <h2>&lt;h1&gt;home&lt;/h1&gt;</h2> */}

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
                    <h2>Simple</h2>
                    <p>I am a strong believer in minimalism and keeping things simple. You want to avoid confusion and
                    get straight to the point.
                    </p>
                </div>

                <div className="home__box2">
                    <h2>Intuitive</h2>
                    <p>The user should not waste clicks or thoughts on your website. Everything should just be a beautiful flow.</p>
                </div>

                <div className="home__box3">
                    <h2>Functionality</h2>
                    <p>A great design is functional. What is a website if its loading capacity is slow, or even worse, nothing is working?</p>
                </div>


                <div className="home__button">
                    <h2>have any questions?</h2>
                    <a>contact me</a>
                </div>

            </div>




        </>
    )
}
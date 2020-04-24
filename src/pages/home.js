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
                                <a>view project</a>
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
                                <a>view project</a>
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
                                <p>First semester project at my school. We had to recreate a website for UN Student Association in Norway.</p>
                                <a>view project</a>
                            </div>
                        </div>
                        <div class="project__img-block">
                            <div class="grid-image image-1 active"><img className="project-image__img3" src={UN} alt="UN Student Association" /></div>
                        </div>
                    </div>
                </section>





                {/* 
                <h2 className="project-container__sub">Semester Project 2020</h2>
                <a>link to project</a>

                <h2 className="project-container__sub">Exam 2019</h2>
                <a>link to project</a>

                <h2 className="project-container__sub">Semester Project 2019</h2>
                <a>link to project</a> */}

            </div>


            <div className="home__information">
                <h2>The future is online.</h2>
                <p>A website should not only be pleasing to look at. It should be an effortless journey
                for the visitor.
                </p>
            </div>
        </>
    )
}
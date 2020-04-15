import React, { useState } from 'react';


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

            <div className="project-container">
                <h2 className="project-container__head">My school projects</h2>

                <h2 className="project-container__sub">Semester Project 2020</h2>
                <a>link to project</a>

                <h2 className="project-container__sub">Exam 2019</h2>
                <a>link to project</a>

                <h2 className="project-container__sub">Semester Project 2019</h2>
                <a>link to project</a>

            </div>
        </>
    )
}
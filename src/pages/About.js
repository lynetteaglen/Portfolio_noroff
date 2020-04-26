import React from 'react';
import Lynette from './../assets/lynette.jpg';

export default function About() {

    return (
        <>
            <div className="about__container">
                <div className="about__box">
                    <h1 className="about__heading">About me</h1>
                    <p className="about__paragraph">
                        Oslo-based designer and programmer who enjoys spending most of my time exploring new things.
                </p>

                    <p className="about__paragraph">
                        I originally come from the deep mountains of Norway and have always been very fond of bright and minimalistic designs.
                        I often get inspired by emotions and settings when it comes to design. To me personally, design is not just visual,
                    it is a feeling. I have always been very dreamy and adventourus, which might have pushed me to a change in careers.</p>

                    <p className="about__paragraph"> A few years back I was introduced to programming by a friend and
                    she opened my eyes for all the exciting things tech can provide the world with.
                    Though I doubted my abilities I took a leap of faith and decided to pursue a career in tech.
                    I felt a growth of passion for design and functionality and knew I had to explore this side of me.
                    I found the field of Frontend Development, and haven't looked back since.</p>

                    <p className="about__paragraph">
                        Now I am about to finish the 2 year programme at Noroff to become a Frontend Developer.
                        I am more excited and hungry for technology than ever, and I am open to continue my growth and skillset.
                </p>
                </div>


                <img src={Lynette} alt="me" className="about__image" />
            </div>
        </>
    )
}
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./About.css";
import resume from "../../assets/resume/WebDevelopmentResume(2021).pdf"

const About = () => (
    <div className="lead about-el text-color">
        <div className="mt">
            <h1 className="mono-font">About me</h1>
            <p>Email: Dmitriso77@gmail.com | <a href={resume} rel="noreferrer" target="_blank">Resume</a></p>
        <p>Migrating from Maryland to Philadelphia about three years ago. Before becoming a Fullstack Web Developer, I was a Entrepreneur for 3 years and a licensed Cosmetologist(Hairstylist) for about seven years. Always having a passion for coding, tech, and gaming. I've accumulated a trove of theoretical and technical skills. Teaching myself everything from Web-Development to Business Management. I have also owned and ran my own business for several years as well. Incorporating my creative affinity to design and handcrafting, I have always sought to conceive and construct from the ground up. Being a natural problem solver, passionate learner, and a resourceful individual is second nature to me. With hard work, dedication, and passion I expect these qualities to show case my commitment to the industry. I hope my diverse experiences have provided me with a unique thought process to take me far as a Web Developer. I love coding, designing, and all forms of creation. Surrounded by many experienced peers and mentors, I am extremely excited to become a UPenn LPS Full Stack Web Developer so I can work on the forefronts of this Digital Age! Please enjoy portfolio and feel free to contact me for any opportunities and/or messages.</p>
        </div>
    </div>
);

export default About;
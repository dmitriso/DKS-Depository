/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./About.css";
import resume from "../../assets/resume/WebDevelopmentResume(2021).pdf"


const About = () => (
    <div className="lead about-el text-color">
        
        <div className="mt">
            <h1 className="mono-font">About me</h1>
            <p>Dmitriso77@gmail.com | <a href={resume} rel="noreferrer" target="_blank">Resume</a></p>
        <p>A Fullstack Web Developer focused on reshaping the digital human experience. Incorporating my creative affinity to design and entrepreneurial background, I have always sought to conceive and construct from the ground up. I love coding, designing, gaming, aquascaping, and fashion. I am extremely excited to be a Web Developer apart of your team!, or helping you bring your digital ideas to reality! </p>
        </div>
    </div>
);

export default About;
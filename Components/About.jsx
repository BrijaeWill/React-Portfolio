import React from "react";
import Header from '/Components/header.jsx'

const About = () => {
    return (
        <>
            <div id="about" className="section">
                <Header pageTitle="About Me" includeNav={false} showHeading={false} />
            </div>

            <div className="about-content">
                <p>
                    This portfolio is a sample project showcasing my skills and growth as an aspiring developer.
                    As a passionate engineer, I am eager to bring ideas to life through innovative, functional projects.
                </p>
                <p>
                    I am currently a bootcamp student learning web development tools and technologies, and this portfolio
                    is my first React application!
                </p>
            </div>
        </>
    );
};
export default About;
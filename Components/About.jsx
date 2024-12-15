import React from "react";
import Header from '/Components/header.jsx'

const About = () => {
    return (
        <>
            <div id="about" className="section bg-custom py-5 text-center">
                <Header pageTitle="About Me" includeNav={false} showHeading={false} />
            </div>

            <div className="about-content container">
                <div className="row justify-content-center">
                <div className="col-md-8 custom-bg rounded shadow p-4">
                <p>
                    This portfolio is a sample project showcasing my skills and growth as an aspiring developer.
                    As a passionate engineer, I am eager to bring ideas to life through innovative, functional projects.
                </p>
                <p>
                    I am currently a bootcamp student learning web development tools and technologies, and this portfolio
                    is my first React application!
                </p>
            </div>
            </div>
            </div>
        </>
    );
};
export default About;
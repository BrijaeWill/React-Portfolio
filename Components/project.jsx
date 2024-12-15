import React from 'react'
import ProjectItem from './projectItem'
import Bitcoin from '/Assets/Bitcoin.jpg'
import Caculator from '../Assets/Caculator.jpg'
import Database from '../Assets/Database.jpg'
import ReactPortfolio from '../Assets/ReactPortfolio.jpg'
import Header from '/Components/header.jsx'
import '/Main/App.css';

const Projects = () => {
    return (
        <div id="projects" className="projects-section py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <Header pageTitle="Projects" includeNav={false} showHeading={false} />
                </div>

                <p className="text-center mb-5">
                    Here are some projects that will best show my skills
                </p>

                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                        <div className="card-container">
                            <ProjectItem img={Caculator} title="Calculator App" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                        <div className="card-container">
                            <ProjectItem img={Bitcoin} title="Bitcoin Currency App" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                        <div className="card-container">
                            <ProjectItem img={Database} title="React Portfolio" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                        <div className="card-container">
                            <ProjectItem img={ReactPortfolio} title="Employee Tracker" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Projects;
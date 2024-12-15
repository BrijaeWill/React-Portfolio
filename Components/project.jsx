import React from 'react'
import ProjectItem from './projectItem'
import Bitcoin from '/Assets/Bitcoin.jpg'
import Caculator from '../Assets/Caculator.jpg'
import Database from '../Assets/Database.jpg'
import ReactPortfolio from '../Assets/ReactPortfolio.jpg'

const Projects = () =>{
    return(
        <div id='projects' >
            <h1>Projects</h1>
            <p>Here are a some projects that will best show my skills</p>
            <div>
                <ProjectItem img={Caculator} title='Caculator App'/>
                <ProjectItem img={Bitcoin} title='BitCoin Currency App'/>
                <ProjectItem img={Database} title='React Portfolio'/>
                <ProjectItem img={ReactPortfolio} title='Employee Tracker'/>

            </div>
        </div>
    )
}
export default Projects;
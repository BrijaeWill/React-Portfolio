import React from 'react'
const ProjectItem =({img, title}) => {
    return(
        <div>
            <img src={img} atl="/"></img>
            <h3>{title}</h3>
        </div>
    )
}
export default ProjectItem;
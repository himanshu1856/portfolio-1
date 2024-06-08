import React from 'react'

import ProjectCard from './ProjectCard'
import projets from './projectData';



const ProjectsContainer = () => {

  return (
    <div className='h-full py-5'>
        {projets.map((project,index)=>{
            return <ProjectCard key={index} project={project}/>
        })}
    </div>
  )
}

export default ProjectsContainer
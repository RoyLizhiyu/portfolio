import React from 'react'
import { NavLink } from 'react-router-dom'
import ProjectItemStyle from './style'
function ProjectItem({img, title='project name', description= 'asdfsdaf adsfasdf fdasf'}) {
  return (
    <ProjectItemStyle>
        <NavLink to='/projects' className='projectItemImg'> 
          <img src = {img} alt='projectPicture' />
        </NavLink>
        <div className='projectItemInfo'>
            <h3 className='projectItemTitle'>{title}</h3>
            <p className='projectItemDescription'>{description}</p>
        </div>
    </ProjectItemStyle>
  )
}

export default ProjectItem
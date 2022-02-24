import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import SkillItem from './SkillItems/SkillItem'
import SkillStyle from './style'
import {FaHtml5, FaNodeJs} from 'react-icons/fa'
import {BsWindow} from 'react-icons/bs'
function SkillSection() {


  return (
    <SkillStyle>
        <div className='container'>
            <SectionTitle title='SKILLS' subtitle="What I can do" />
            <div className='skillItems'>
                <SkillItem 
                title='Front-end dev'  
                paragraph= "I have working proficiency on HTML, CSS and JavaScript. I use ReactJS as my main framework."
                icon = {<FaHtml5 />}
                />
                <SkillItem 

                title='Back-end dev' 
                paragraph= "I have basic understanding on Node.js. I use Express middleware to connect client side and database. "
                icon = {<FaNodeJs />}
                />
                <SkillItem 
                title='App dev' 
                paragraph= " I have worked on some group projects of simple desktop application such as image filter."
                icon = {<BsWindow />}
                />
            </div>
        </div>
    </SkillStyle>
  )
}

export default SkillSection
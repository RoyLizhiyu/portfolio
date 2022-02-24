import React from 'react'
import Button from '../Button/Button'
import Paragraph from '../Paragraphs/Paragraph'
import SectionTitle from '../SectionTitle/SectionTitle'
import aboutImg from '../../assets/images/about.jpg'
import AboutStyle from './style'
function AboutSection() {
  return (
    <AboutStyle>
     <div className='container'>
        <div className='aboutTexts'>
            <SectionTitle title='ABOUT ME' subtitle='Let me introduce myself' />
            <Paragraph>
            I am an alumnus student from the University of Toronto. 
            I graduated last summer and I have been studying on front end developments since then. 
            I am now open to any junior-level front end work!
            </Paragraph>

            <div className='aboutSectionBtns'> 
                <Button text='Works' link='/projects' outline = {false}/>
                <Button text='Read More' link='/about' outline = {true}/>
            </div>
        </div>

        <div className='aboutImg' >
            <img src={aboutImg} alt='about img' />
        </div>

     </div>
    </AboutStyle>
  )
}

export default AboutSection
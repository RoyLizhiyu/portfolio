import React from 'react'
import Paragraph from '../../Paragraphs/Paragraph'
import SkillItemStyle from './style'

function SkillItem(props) {
  return (
    <SkillItemStyle>
        <div className='skillIcon'>
            {props.icon}
        </div>
        <div className='skillTitle'>
            {props.title}
        </div>
        <Paragraph>
            {props.paragraph}
        </Paragraph>
    </SkillItemStyle>
  )
}

export default SkillItem
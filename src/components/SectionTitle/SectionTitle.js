import React from 'react'
import SectionStyle from './Style'
function SectionTitle(props) {
  return (
    <SectionStyle className='sectionTitle'>
        <p>
        {props.subtitle}
        </p>
        <h2>
        {props.title}
        </h2>
    </SectionStyle>
  )
}

export default SectionTitle
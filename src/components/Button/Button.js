import React from 'react'
import { Link } from 'react-router-dom'
import Style from './style'
function Button(props) {
  return (
    <Style outline={props.outline}>
      <Link onClick={()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }} 
        className='button'
        to={props.link}>
        {props.text} 
       </Link>
    </Style>
  )
}

export default Button
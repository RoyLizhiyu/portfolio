import React from 'react'
import { Link } from 'react-router-dom'
import Style from './style'
function Button(props) {
  return (
    <Style outline={props.outline}><Link className='button' to={props.link}>{props.text} </Link></Style>
  )
}

export default Button
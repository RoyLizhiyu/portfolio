import React from 'react'
import styled from 'styled-components'

const LinkStyle = styled.div`
  .linkHeading{
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  .linkItem{
    margin-bottom: 1rem;

    a{
      font-size: 1.8rem;
    }
  }

  
`

function LinkColumn({title, links}) {
  const target = title === 'Important Links'? '_self' : '_blank';
  return (
    <LinkStyle>
        <h2 className='linkHeading'>{title}</h2>
        <ul className='linkList'>
          {links.map((link)=>{
            return <li className='linkItem'><a href={link.url} target={target} rel='noreferrer'>{link.name}</a></li>
          })}
        </ul>
    </LinkStyle>
  )
}

export default LinkColumn
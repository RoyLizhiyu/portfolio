import React from 'react'
import Paragraph from '../../Paragraphs/Paragraph'
import InfoCardStyle from './style'

function InfoCard({title, items}) {
  return (
    <InfoCardStyle>
        <h2 className='cardTitle'>{title}</h2>
        <div className='items'>
            {items.map(item=>{
                return (
                    <div className='item'>
                        <h1 className='itemName'>{item.name}</h1>
                        <div className='itemDescription'>
                            {item.description.map(e=>
                            {return <div className='despara'><Paragraph >{e}</Paragraph></div>}
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    </InfoCardStyle>
  )
}

export default InfoCard
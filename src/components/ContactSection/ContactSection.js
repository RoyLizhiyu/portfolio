import React from 'react'
import Button from '../Button/Button'
import SectionTitle from '../SectionTitle/SectionTitle'
import ContactStyle from './Style'

function ContactSection() {
  return (
    <ContactStyle>
        <div className='container'>
            <div className='contactBanner'>
                <SectionTitle title="Handshake!" subtitle="Let's get it started." />
                <Button outline={false} link='/contact' text="Contact Me" />
            </div>
        </div>
    </ContactStyle>
  )
}

export default ContactSection
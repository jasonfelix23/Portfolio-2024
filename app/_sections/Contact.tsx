import React from 'react';
import Button from '../_components/Button';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h2 className="contact-title">what&apos;s next?</h2>
      <h2 className="contact-sub-title">Get in Touch</h2>
      <p className="contact-text">
       I&apos;m looking for Frontend and Full stack developer roles. 
       If you have any relevant openings or projects, I would love to hear from you. Feel free to reach out to me.
       Looking forward to potentially collaborating with you. 
      </p>
      <div className="contact-cta">
        <Button text="Say Hello" link="mailto:email@jasonfelix.in"/>
      </div>
    </div>
  )
}

export default Contact
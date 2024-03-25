import Link from 'next/link'
import React from 'react'
import Button from '../_components/Button'

const Hero = () => {
  return (
    <div className='hero'>
        <h1 className="hero-title">
            Hi my name is 
        </h1>
        <h2 className='hero-title-large'>
            Jason Felix.
        </h2>
        <h3 className='hero-title-large hero-title-sub'>
            Code. Build. Solve.
        </h3>
        <p className="hero-text">
            I&apos;m a software engineer with expertise in creating top-notch digital
            experiences. My current focus is on developing services that are accessible and 
            centered around user needs, as part of the team at &nbsp;
            <Link href='https:www.qipath.com' target='_blank' className='link'>
                QiPath
            </Link>
        </p>
        <div className="hero-button">
            <Button text='Visit' link='/'/>
        </div>
    </div>
  )
}

export default Hero
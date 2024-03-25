import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="title">
            <h2>About Me</h2>
        </div>
        <div className="about-grid">
            <div className="about-grid-info">
            <p className="about-grid-info-text">
            Hi there! I&apos;m Jason, a dedicated web developer with a knack for crafting captivating 
digital experiences. Armed with a Master&apos;s in Computer Science from the 
University of Colorado Boulder, I&apos;ve been immersed in the world of web development since 2018.
</p>
<p className="about-grid-info-text">
At Qipath, my focus is on crafting exceptional web applications that not only meet but 
exceed client expectations. Alongside my professional endeavors, I enjoy delving into competitive 
programming challenges and am currently exploring the development of an Eraser.io clone.
</p>
<p className="about-grid-info-text">
Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Angular</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Java</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">Python</li>
          </ul>
            </div>
            <div className='about-grid-photo'>
                {/* <div className="overlay"></div> */}
                {/* <div className="overlay-border"></div> */}
                <div className="about-grid-photo-container">
                    <Image src='/skills_graph.png' alt='profile' fill/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
import React from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const SocialIcons = () => {
    const socialLinks = [
        { name: "Github", icon: <FiGithub />, link: "https://www.github.com/jasonfelix23" },
        
        {
          name: "LinkedIn",
          icon: <FiLinkedin />,
          link: "https://www.linkedin.com/in/jasonfelix23/",
        },
        {
          name: "Instagram",
          icon: <FiInstagram />,
          link: "https://www.instagram.com/jason_._.felix/",
        }
      ];
  return (
    <div className='social-icons'>
        <ul className='social-icons-list'>
            {
                socialLinks.map(({name, link, icon}) => (
                    <li key={name} title={name} className="social-icons-list-item">
                        <Link 
                            href={link} 
                            className='social-icons-list-item-link' 
                            target='_blank'>
                                {icon}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default SocialIcons
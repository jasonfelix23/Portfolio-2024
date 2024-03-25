import React from 'react';
import Link from 'next/link';
import Logo from '../_components/Logo';
import Button from '../_components/Button';
import Image from 'next/image';

const Navbar = () => {
    const sectionLinks = [
        { name: "About", link: "/#about" },
        { name: "Experience", link: "/#experience" },
        { name: "Work", link: "/#work" },
        {
          name: "Contact",
          link: "/#contact",
        },
      ];
  return (
    <nav>
        <div className='wrapper'>
            <div className="brand">
                <Link href="https://www.jasonfelix.in">
                    <Image src='/icons8-j-key-50.png' alt='logo' width={60} height={60} />
                </Link>
            </div>
            <div className="nav-items">
                <ul className="nav-items-list">
                    {sectionLinks.map(({name, link})=>(
                        <li key={name} className='nav-items-list-item'>
                            <Link href={link} className='nav-items-list-items-link'>{name}</Link> 
                        </li>
                    ))}
                </ul>
                <div className='nav-items-button'>
                        <Button text="Resume" link="/Resume.pdf"></Button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
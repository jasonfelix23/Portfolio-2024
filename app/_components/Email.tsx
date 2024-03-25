import Link from 'next/link'
import React from 'react'

const Email = () => {
  return (
    <div className='email'>
    <Link href="mailto:email@jasonfelix.in" className='email-link'>
        email@jasonfelix.in
    </Link>
    </div>
  )
}

export default Email
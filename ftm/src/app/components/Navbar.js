import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-row min-w-full pl-4 bg-slate-800 gap-5 h-14'>
        <Link className=' navbar-item' href='/'>
          Home
        </Link>
        <Link className='navbar-item' href='/transfer_market'>
          Transfer Market
        </Link>
        <Link className='navbar-item' href='/clubs'>
          Clubs
        </Link>
    </nav>
  )
}

export default Navbar
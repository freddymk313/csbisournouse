import React from 'react'
import { Navbar } from './Navbar'

const Header = () => {
  return (
    <header>
        <div className='bg-[#0073b7] flex items-center py-2 text-[#FFFFFF] justify-between w-full px-4 md:px-16 lg:px-20'>
            <div className="">
                contact
            </div>
            <div className="">
                social
            </div>
        </div>

        <Navbar />
    </header>
  )
}

export default Header
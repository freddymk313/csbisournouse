import React from 'react'
import { Navbar } from './Navbar'
import { MdFacebook, MdMail, MdPhone } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'

const Header = () => {
  return (
    <header> 
        <div className='bg-[#0073b7] flex items-center py-2 text-[#FFFFFF] justify-between w-full px-4 md:px-16 lg:px-20'>
            <div className="flex flex-col md:flex-row items-center gap-x-2 md:justify-start w-full">
                <div className="flex items-center gap-1">
                    <MdPhone className="h-4 w-4" /> <span className='text-sm'>+243 882 660 044</span>
                </div>
                <div className="flex items-center gap-1">
                    <MdMail className="h-4 w-4" /> <span className='text-sm'>direction@cs-bisounours.com</span>
                </div>
            </div>

            <div className="hidden md:flex items-center gap-1">
                <MdFacebook className="h-5 w-5" />
                <AiFillInstagram className="h-5 w-5" />
                <IoLogoWhatsapp className="h-5 w-5" />
            </div>
        </div>

        <Navbar />
    </header>
  )
}

export default Header
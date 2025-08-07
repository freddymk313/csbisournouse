import { Navbar } from './Navbar'
import { MdFacebook, MdMail, MdPhone } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Bar - Contact Info */}
      <div className='bg-[#0073B7] flex items-center py-3 text-white justify-between w-full px-4 md:px-16 lg:px-20'>
        <div className="flex flex-col md:flex-row items-center gap-x-4 md:gap-x-6 w-full">
          <div className="flex items-center gap-2 hover:text-[#E6F0FA] transition-colors">
            <MdPhone className="h-4 w-4" />
            <a href="tel:+243882660044" className='text-sm font-medium'>+243 882 660 044</a>
          </div>
          <div className="flex items-center gap-2 hover:text-[#E6F0FA] transition-colors">
            <MdMail className="h-4 w-4" />
            <a href="mailto:direction@cs-bisounours.com" className='text-sm font-medium'>direction@cs-bisounours.com</a>
          </div>
        </div>

        {/* Social Media */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="p-1 hover:text-[#E6F0FA] transition-colors">
            <MdFacebook className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram" className="p-1 hover:text-[#E6F0FA] transition-colors">
            <AiFillInstagram className="h-5 w-5" />
          </a>
          <a href="#" aria-label="WhatsApp" className="p-1 hover:text-[#E6F0FA] transition-colors">
            <IoLogoWhatsapp className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <Navbar />
    </header>
  )
}

export default Header
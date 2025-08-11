import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { navigationLinks } from '../constants';
import { MdClose, MdMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Animate navbar on mount
        gsap.fromTo('.navbar',
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );

        // Animate nav links
        gsap.fromTo('.nav-link',
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.5, ease: "power2.out" }
        );
    }, []);

    useEffect(() => {
        // Empêcher le scroll du body quand le menu est ouvert
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Animation du menu mobile
        if (mobileMenuRef.current) {
            if (isMenuOpen) {
                gsap.fromTo(mobileMenuRef.current,
                    {
                        height: 0,
                        opacity: 0,
                        display: 'none'
                    },
                    {
                        height: 'auto',
                        opacity: 1,
                        display: 'block',
                        duration: 0.4,
                        ease: "power2.out",
                        onStart: () => {
                            gsap.set(mobileMenuRef.current, { display: 'block' });
                        }
                    }
                );

                // Animation des liens
                gsap.from('.mobile-link', {
                    x: -20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.3,
                    delay: 0.2
                });
            } else {
                gsap.to(mobileMenuRef.current, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                    onComplete: () => {
                        gsap.set(mobileMenuRef.current, { display: 'none' });
                    }
                });
            }
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        // <nav className="bg-transparent">
        <nav className={`navbar transition-all bg-none duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-none'}`}>
            <div className="mx-auto px-4 md:px-16 lg:px-20 py-2">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <a href="/">
                            <img src="/logo.jpg" alt="logo" className="h-14 w-14 md:h-16 md:w-16" />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navigationLinks.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.href}
                                className={({ isActive }) =>
                                    `nav-link transition-colors duration-300 hover:text-[#0073b7] ${isActive
                                        ? 'text-[#0073b7]'
                                        : isScrolled
                                            ? 'text-gray-700'
                                            : 'text-gray-950'
                                    }`
                                }
                            >
                                {link.text}
                            </NavLink>
                        ))}

                        <a href='/inscription' 
                        className="bg-[#0073b7] hover:bg-[#005a8f] text-white ml-3 px-6 py-2.5">
                            Admission
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <a 
                        href='/inscription' 
                        className="bg-[#0073b7] hover:bg-[#005a8f] text-white px-6 py-2.5">
                            Admission
                        </a>
                        <button
                            onClick={toggleMenu}
                            className={`p-2 rounded-md cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-gray-950'}`}
                            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        >
                            {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    ref={mobileMenuRef}
                    className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md fixed left-0 right-0 top-[72px] z-50 shadow-xl"
                    style={{ display: 'none' }}
                >
                    <div className="container mx-auto px-6 md:px-16 lg:px-20 py-4">
                        <div className="flex flex-col space-y-2">
                            {navigationLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="mobile-link text-gray-700 hover:text-[#0073b7] py-1 transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.text}
                                </a>
                            ))}
                            <a href='/inscription' className="mobile-link mt-2 bg-[#0073b7] hover:bg-[#005a8f] text-white px-6 py-3 w-full">
                                Admission
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
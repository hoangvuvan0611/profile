"use client";
import Link from 'next/link';
import React, {useState} from 'react';
import NavLink from './NavLink';
import { Button } from '../ui/button';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
  
const navLinks = [
    {
        title: "Giới Thiệu",
        path: "#", 
    },
    {
        title: "Dự Án",
        path: "#", 
    },
    {
        title: "Liên Hệ",
        path: "#", 
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen]= useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
        <div className="flex container flex-wrap items-center justify-between mx-auto p-8 px-4 py-3">
            <Link href={"/"} className="text-xl md:text-4xl text-white font-semibold">
                SIRIUS
            </Link>
            <div className="mobile-menu block md:hidden">
                {
                    navbarOpen ? (
                        <Button onClick={() => setNavbarOpen(false)} className="flex items-center px-1 py-1 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <XMarkIcon className='h-5 w-5'/>
                        </Button>
                    ):(
                        <Button onClick={() => setNavbarOpen(true)} className="flex items-center px-1 py-1 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <Bars3Icon className='h-5 w-5'/>
                        </Button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {
                        navLinks.map((link, index) => 
                            <li key={index}>
                                <NavLink path={link.path} title={link.title}></NavLink>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
};

export default Navbar;


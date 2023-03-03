import React, { useState } from 'react'
import { animated, useSpring } from "react-spring"

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
        console.log("Clicked")
    }

  return (
    <div>
        <nav class="absolute top-0 left-0 right-0  z-20 bg-transparent overflow-hidden">
            <div class="relative px-4 sm:px-6 lg:px-8 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" class="flex items-center">
                    <span class="self-center text-xl font-semibold whitespace-nowrap text-white z-50">Loopstudio</span>
                </a>

                <button 
                data-collapse-toggle="navbar-default" 
                type="button" 
                class="inline-flex z-50 items-center p-2 ml-3 text-sm text-gray-500 md:hidden focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                aria-controls="navbar-default" 
                aria-expanded="false"
                onClick={toggleMenu}
                >
                    <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
                    {isOpen ? (
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18.293 16.293a1 1 0 0 1-1.414 1.414L10 11.414l-6.879 6.88a1 1 0 0 1-1.414-1.414l6.88-6.88-6.88-6.88a1 1 0 0 1 1.414-1.414L10 8.586l6.879-6.88a1 1 0 0 1 1.414 1.414L11.414 10l6.879 6.293z" clipRule="evenodd" />
                    </svg>
                    ) : (
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    )}
                </button>
                <div
                    className={`fixed top-0 right-0 z-40 h-full w-full bg-black  ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                    } duration-1000 ease-in-out md:relative md:translate-x-10 md:bg-transparent md:block md:w-auto`}
                >
                    <ul class="flex flex-col text-4xl gap-5 uppercase mt-16 || md:gap-0 md:normal-case p-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white  md:p-0 hover:text-yellow-300" aria-current="page">About</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white md:p-0 hover:text-yellow-300">Careers</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white md:p-0 hover:text-yellow-300">Events</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white  md:p-0 hover:text-yellow-300">Products</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white md:p-0 hover:text-yellow-300">Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav

import React from 'react'

function Nav() {
  return (
    <div>
        <nav class="absolute top-0 left-0 right-0  z-20 bg-transparent">
            <div class="relative px-4 sm:px-6 lg:px-8 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" class="flex items-center">
                    <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Loopstudio</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 " aria-current="page">About</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 bg-transparent">Careers</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 bg-transparent">Events</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 bg-transparent">Products</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 bg-transparent">Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav

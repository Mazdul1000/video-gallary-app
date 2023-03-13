import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.webp'
import {AiOutlineMenu} from 'react-icons/ai'
import {IoIosAddCircle} from 'react-icons/io'
import {BiSearchAlt} from 'react-icons/bi'


const Navbar = () => {
    return (
        <nav className="border-gray-200 px-2 mx-auto mb-10 shadow-md">
  <div className="container mx-auto flex flex-wrap items-center h-20 justify-between">
  <div className='flex items-center space-x-8'>
      <AiOutlineMenu />
  <a href='#' className="flex">
      
      <img className='h-10' src={logo} alt="" />
      <span className="self-center text-lg font-semibold whitespace-nowrap">Video App</span>
  </a>
  </div>


  <div className="flex">
      <div className="relative mr-3 md:mr-0 hidden md:block w-80 ml-[-100px]">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearchAlt className='text-xl'/>
        </div>
        <input type="text" id="email-adress-icon" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2" placeholder="Search..." />
      </div>
  </div>

  <div>
  <button>
    <IoIosAddCircle className='text-4xl' />
    </button>
  </div>
  
  </div>
</nav>
    );
};

export default Navbar;
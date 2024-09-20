"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import smallLogo from "../../assets/images/vercel.svg";
import { Heart, User } from "lucide-react";

// SVGs para los íconos
const HomeIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='h-6 w-6 text-blue-700'
  >
    <path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
    <path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
  </svg>
);

const UserCircleIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='h-6 w-6 text-blue-700'
  >
    <path d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM6.293 15.293a1 1 0 0 1 1.414-1.414C8.034 14.286 9.005 15 10 15s1.966-.714 2.293-1.121a1 1 0 0 1 1.414 1.414C13.914 15.707 12 17 10 17s-3.914-1.293-3.707-1.707z' />
    <path d='M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
  </svg>
);

const InformationCircleIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='h-6 w-6 text-blue-700'
  >
    <path d='M12 3v9.09a1 1 0 0 0 .293.707L16 14.414V21h-4v-4H8v4H4v-6.586l3.707-1.707A1 1 0 0 0 8 12V3h4z' />
  </svg>
);

const LogoutIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='h-6 w-6 text-gray-500'
  >
    <path d='M13.25 2a.75.75 0 0 0-1.5 0v8.75H5a2.25 2.25 0 0 0-2.25 2.25v3.75A2.25 2.25 0 0 0 5 19.75h6.75V22a.75.75 0 0 0 1.5 0v-8.75H19a.75.75 0 0 0 0-1.5h-4.25V2z' />
  </svg>
);

const Bars3Icon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='h-6 w-6 text-black'
  >
    <path d='M4 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z' />
  </svg>
);

const XMarkIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='h-6 w-6 text-black'
  >
    <path d='M6.293 16.293a1 1 0 0 1 1.414-1.414L12 14.586l4.293 4.293a1 1 0 0 1 1.414-1.414L13.414 13l4.293-4.293a1 1 0 1 1 1.414 1.414L14.828 14l4.293 4.293a1 1 0 0 1-1.414 1.414L13.414 15l-4.293 4.293a1 1 0 0 1-1.414-1.414L12 13.414l-4.293-4.293a1 1 0 0 1-1.414 1.414L10.586 12 6.293 16.293z' />
  </svg>
);

export default function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-transparent'>
      <ul className='flex w-full border justify-around'>
        <div className='flex justify-between items-center py-4'>
          <div className='flex items-center'>
            <Heart className='h-8 w-8 text-blue-500' />
            <span className='ml-2 text-xl font-semibold text-gray-900'>
              Adopta Me
            </span>
          </div>
        </div>
        <li className='flex items-center mr-3 p-3 border-b-2 border-transparent hover:border-blue-700 text-slate-900 text-body font-body transition-all duration-300'>
          {/* <LogoutIcon className='mr-4' /> */}
          <div className='flex items-center'>
            <User className='h-8 w-8 text-gray-400' />
          </div>
          <Link href='/'>Cerrar sesión</Link>
        </li>
      </ul>
      {children}
    </nav>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [ mobileMenuIsOpen, setMobileMenuIsOpen ] = useState(false);
  return (
    <nav className="flex justify-between items-center py-2 md:py-8 px-2">
      <Link className="nav-link" href="/">Raymond Yang</Link>
      <div className="hidden md:flex justify-between space-x-8">
        <Link className="nav-link" href="/blog">Blog</Link>
        <Link className="nav-link" href="/projects">Projects</Link>
      </div>
      <div className="md:hidden">
        <button onClick={() => setMobileMenuIsOpen(true)}>
          <RxHamburgerMenu className="h-7 w-7" />
        </button>
        {
          mobileMenuIsOpen ?
          <div className="mobile-menu">
            <button className="flex justify-end w-full">
              <RxCross1 className="h-7 w-7" onClick={() => setMobileMenuIsOpen(false)} />
            </button>
            <div className="text-2xl space-y-2 mt-8">
              <Link className="nav-link" href="/" onClick={() => setMobileMenuIsOpen(false)}>Home</Link>
              <Link className="nav-link" href="/blog" onClick={() => setMobileMenuIsOpen(false)}>Blog</Link>
              <Link className="nav-link" href="/projects" onClick={() => setMobileMenuIsOpen(false)}>Projects</Link>
            </div>
          </div>
          : undefined
        }
      </div>
    </nav>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Navbar() {
  const [ mobileMenuIsOpen, setMobileMenuIsOpen ] = useState(false);
  const router = useRouter();

  const handleLinkClick = (href) => {
    router.push(href);
    // Wait for route to change before closing the mobile menu to ensure the
    // user does not see the previous screen
    setTimeout(() => {
      setMobileMenuIsOpen(false);
    }, 100);
  };

  return (
    <nav className="flex justify-between items-center py-2 md:py-8 px-2">
      <Link className="nav-link" href="/">RAYMOND YANG</Link>
      <div className="hidden md:flex justify-between space-x-8">
        <Link className="nav-link" href="/blog">Blog</Link>
        <Link className="nav-link" href="/projects">Projects</Link>
        <Link className="nav-link flex items-center" href="/raymond_yang_cv.pdf" target="_blank" rel="noopener noreferrer">
          CV <MdOutlineFileDownload className="h-6 w-6" />
        </Link>
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
            <div className="text-2xl space-y-2 mt-8 flex flex-col">
              <button className="nav-link" onClick={() => handleLinkClick('/')}>Home</button>
              <button className="nav-link" onClick={() => handleLinkClick('/blog')}>Blog</button>
              <button className="nav-link" onClick={() => handleLinkClick('/projects')}>Projects</button>
              <Link className="nav-link flex items-center justify-center" href="/raymond_yang_cv.pdf" target="_blank" rel="noopener noreferrer">
                CV <MdOutlineFileDownload className="h-6 w-6" />
              </Link>
            </div>
          </div>
          : null
        }
      </div>
    </nav>
  );
}
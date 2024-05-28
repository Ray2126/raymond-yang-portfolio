'use client'
 
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from "react-icons/fa6";
import Link from 'next/link';

export default function MdxLayout({ children }) {
  return (
    <>
      <Link className="flex items-center mb-12 styled-link-tertiary space-x-1" href="/blog">
        <span>{<FaArrowLeft />}</span>
        <span>Back to Blog</span>
      </Link>
      <div className="space-y-4">{children}</div>
    </>
  )
}
'use client'
 
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from "react-icons/fa6";
import Link from 'next/link';

export default function MdxLayout({ children }) {
  const router = useRouter()
  return (
    <>
      <Link className="flex items-center mb-12 styled-link-tertiary" href="/blog">
        {<FaArrowLeft />} &nbsp; Back to Blog
      </Link>
      <div className="space-y-4">{children}</div>
    </>
  )
}
'use client'
 
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from "react-icons/fa6";


export default function MdxLayout({ children }) {
  const router = useRouter()
  return (
    <>
      <button className="flex items-center mb-12" type="button" onClick={() => router.push('/blog')}>
        {<FaArrowLeft />} &nbsp; Back to Blog
      </button>
      <div className="space-y-4">{children}</div>
    </>
  )
}
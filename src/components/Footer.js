import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex justify-between py-12 px-2 md:px-4 mt-auto">
      <div>&copy; Raymond Yang</div>
      <div className="flex justify-between space-x-4 md:space-x-8">
        <Link className="styled-link-tertiary" href="mailto:raymondyang@outlook.co.nz" aria-label="Mail to email address: raymondyang@outlook.co.nz">
          <MdEmail className="w-7 h-7" />
        </Link>
        <Link className="styled-link" style={{ color: '#e8eaea' }} href="https://github.com/Ray2126" target="_blank" aria-label="Go to Raymond's GitHub profile">
          <FaGithub className="w-6 h-6" />
        </Link>
        <Link className="styled-link" style={{ color: '#0072b1' }} href="https://www.linkedin.com/in/raymond-yang-96365419a/" target="_blank" aria-label="Go to Raymond's LinkedIn profile">
          <FaLinkedin className="w-6 h-6" />
        </Link>
      </div>
    </footer>
  );
}

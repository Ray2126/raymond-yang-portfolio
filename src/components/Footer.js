import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex justify-between py-12 px-4">
      <div>&copy; Raymond Yang</div>
      <div className="flex justify-between space-x-8">
        <Link href="https://github.com/Ray2126" target="_blank">
          <FaGithub className="w-6 h-6" />
        </Link>
        <Link href="https://www.linkedin.com/in/raymond-yang-96365419a/" target="_blank">
          <FaLinkedin className="w-6 h-6" />
        </Link>
      </div>
    </footer>
  );
}

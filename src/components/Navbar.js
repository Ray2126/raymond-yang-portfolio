import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between py-2 md:py-8 px-4">
      <Link className="nav-link" href="/">Raymond Yang</Link>
      <div className="flex justify-between space-x-8">
        <Link className="nav-link" href="/blog">Blog</Link>
        <Link className="nav-link" href="/projects">Projects</Link>
      </div>
    </nav>
  );
}

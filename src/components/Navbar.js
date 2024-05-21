import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between py-12 px-4">
      <Link href="/">Raymond Yang</Link>
      <div className="flex justify-between space-x-8">
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
}

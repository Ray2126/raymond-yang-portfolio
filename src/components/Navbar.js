import Link from 'next/link'

export default function Header() {
  return (
    <nav className="flex justify-between text-gray-400 py-12 px-4">
      <Link href="/">Raymond Yang</Link>
      <div className="flex justify-between space-x-8">
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
}

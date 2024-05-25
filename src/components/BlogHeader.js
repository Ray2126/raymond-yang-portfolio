'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function BlogHeader({ post }) {
  const { title, slug, publishDate, readTimeMins, category } = post;
  return (
    <header className="mb-12">
      {usePathname() === '/blog' ?
        <h2>
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h2> :
        <h1>{title}</h1>
      }
      <p>
        {new Date(publishDate).toDateString().split(' ').slice(1).join(' ')}{' '}
        &#x2022;{' '}
        {readTimeMins}{' '}mins
        &#x2022;{' '}
        {category}
      </p>
    </header>
  );
}

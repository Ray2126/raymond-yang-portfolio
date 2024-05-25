import { readdir } from 'node:fs/promises';
import BlogHeader from '@/components/BlogHeader';

async function getPosts() {
  // Retrieve slugs from post routes
  const slugs = (
    await readdir('./src/app/blog/(posts)', { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    })
  );

  // Sort posts from newest to oldest
  posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  return posts;
}

const posts = await getPosts();

export default function Blog() {
  return (
    <div className="space-y-12">
      <h1>Blog</h1>
      <ol>
      {posts.map((post) => (
        <li key={post.slug} className="space-y-2">
          <BlogHeader post={post} />
        </li>
      ))}
    </ol>
    </div>
  );
}

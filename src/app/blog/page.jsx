import React from 'react';
import styles from './blog.module.css';
import PostCard from '@/components/postCard/postCard';
import { getApiUrl } from '@/lib/utils';
// import { getPosts } from '@/lib/data';

// FETCH DATA WITH API
const getData = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
  const apiUrl = getApiUrl(`/api/blog`);
  console.log(apiUrl);
  // const res = await fetch('http://localhost:3000/api/blog', { cache: 'no-store' });
  const res = await fetch(apiUrl, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const BlogPage = async () => {
  // FETCH DATA WITH API
  const posts = await getData();

  // FETCH DATA WITH DATABASE data.js
  // const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;

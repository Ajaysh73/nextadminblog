import React from 'react';
import styles from './blog.module.css';
import PostCard from '@/components/postCard/postCard';
import { getPosts } from '@/lib/data';

// FETCH DATA WITH API
// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// };

const BlogPage = async () => {
  // FETCH DATA WITH API
  // const posts = await getData();

  const posts = await getPosts();
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

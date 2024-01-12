import React, { Suspense } from 'react';
import styles from './singlePost.module.css';
import Image from 'next/image';
import PostUser from '@/components/postUser/PostUser';
import { getPost } from '@/lib/data';

// FETCH DATA WITH API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
//     cache: 'no-store',
//   });
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const slug = params.slug;
  console.log(slug);
  // console.log(slug + 'in SinglePostPage');
  // FETCH DATA WITH API
  // const post = await getData(slug);
  // const parsedIntSlug = +slug;
  // console.log(parsedIntSlug);
  const post = await getPost(slug);
  console.log(post);
  console.log(post);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt='' fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.detail}>
          <Image src='/post1.jpeg' height={50} width={50} alt='avatar' className={styles.avatar} />
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;

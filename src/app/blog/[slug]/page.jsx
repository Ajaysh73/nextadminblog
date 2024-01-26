import React, { Suspense } from 'react';
import styles from './singlePost.module.css';
import Image from 'next/image';
// import PostUser from '@/components/postUser/PostUser';

import PostUser from '@/components/postUser/postUser';
import { getApiUrl } from '@/lib/utils';

// FETCH DATA WITH API
const getData = async (slug) => {
  const apiUrl = getApiUrl(`/api/blog/${slug}`);
  // const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
  const res = await fetch(apiUrl, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const slug = params.slug;
  const post = await getData(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};
const SinglePostPage = async ({ params }) => {
  const slug = params.slug;

  // FETCH DATA WITH API
  const post = await getData(slug);

  // const parsedIntSlug = +slug;
  // console.log(parsedIntSlug);
  // const post = await getPost(slug);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt='' fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;

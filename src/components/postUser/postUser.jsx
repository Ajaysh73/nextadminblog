import React from 'react';
import styles from './postUser.module.css';
import { getUser } from '@/lib/data';
import Image from 'next/image';

// FETCH DATA WITH API
// const getData = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
//     cache: 'no-store',
//   });
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // FETCH DATA WITH API
  // const user = await getData(userId);
  // console.log('userid in PostUser' + userId);
  // const parsedUserId = +userId;
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user.img : '/noavatar.png'}
        height={50}
        width={50}
        alt='avatar'
        className={styles.avatar}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
        {/* <span className={styles.username}>AjayS</span> */}
      </div>
    </div>
  );
};

export default PostUser;

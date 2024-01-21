import React from 'react';
import styles from './admin.module.css';
import AdminPosts from '@/components/adminPosts/adminPosts';
const AdminPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <AdminPosts />
        </div>
        <div className={styles.col}> </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}></div>
        <div className={styles.col}> </div>
      </div>
    </div>
  );
};

export default AdminPage;

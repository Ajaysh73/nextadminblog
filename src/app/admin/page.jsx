import React from 'react';
import styles from './admin.module.css';
import AdminPosts from '@/components/adminPosts/adminPosts';
import AdminUserForm from '@/components/adminUserForm/adminUserForm';
import AdminUsers from '@/components/adminUsers/adminUsers';
const AdminPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <AdminPosts />
        </div>
        <div className={styles.col}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <AdminUsers />
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

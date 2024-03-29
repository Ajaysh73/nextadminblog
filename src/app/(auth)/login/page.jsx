import LoginForm from '@/components/loginForm/loginForm';
import { handleGithublogin } from '@/lib/action';
import styles from './about.module.css';
import React from 'react';

const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithublogin}>
          <button className={styles.github}>Login using GitHub</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

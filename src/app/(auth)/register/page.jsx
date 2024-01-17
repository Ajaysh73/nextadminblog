import React from 'react';
import styles from './register.module.css';
import { register } from '@/lib/action';
const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={register} className={styles.form}>
          <input type='text' placeholder='username' name='username' />
          <input type='text' placeholder='email' name='email' />
          <input type='password' placeholder='password' name='password' />
          <input type='password' placeholder='confirm password' name='passwordRepeat' />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

import { addPost } from '@/lib/action';
import React from 'react';
import styles from './navigationTest.module.css';

const NavigationTest = () => {
  return (
    <div className={styles.container}>
      <form action={addPost}>
        <input type='text' name='title' placeholder='title' />
        <input type='text' name='desc' placeholder='desc' />
        <input type='text' name='slug' placeholder='slug' />
        <input type='text' name='userId' placeholder='userId' />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NavigationTest;

import React from 'react';
import styles from './home.module.css';
import Image from 'next/image';
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thought Agency.</h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate eos quae
          eligendi voluptatibus sint perferendis at sequi tenetur deserunt!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src='/brands.png' alt='' fill className={styles.brand}></Image>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/hero.gif' alt='' fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;

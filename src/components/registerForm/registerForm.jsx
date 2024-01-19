'use client';
import React, { useEffect } from 'react';
import styles from './registerForm.module.css';
import { register } from '@/lib/action';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push('/login');
  }, [state?.success, router]);
  return (
    <form action={formAction} className={styles.form}>
      <input type='text' placeholder='username' name='username' />
      <input type='text' placeholder='email' name='email' />
      <input type='password' placeholder='password' name='password' />
      <input type='password' placeholder='confirm password' name=' ' />
      <button>Register</button>
      {state?.error}
      <Link href='/login'>
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;

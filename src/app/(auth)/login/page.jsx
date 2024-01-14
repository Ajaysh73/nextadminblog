import { auth, signIn } from '@/lib/auth';
import React from 'react';

const LoginPage = async () => {
  const session = await auth();
  console.log(session);

  const loginGithub = async () => {
    'use server';
    await signIn('github');
  };
  return (
    <div>
      <form action={loginGithub}>
        <button>Login using GitHub</button>
      </form>
    </div>
  );
};

export default LoginPage;

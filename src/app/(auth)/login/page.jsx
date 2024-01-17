import { handleGithublogin } from '@/lib/action';
import { auth, signIn } from '@/lib/auth';
import React from 'react';

const LoginPage = async () => {
  const session = await auth();
  console.log('session', session);

  return (
    <div>
      <form action={handleGithublogin}>
        <button>Login using GitHub</button>
      </form>
    </div>
  );
};

export default LoginPage;

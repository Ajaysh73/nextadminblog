import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDb } from './utils';
import { User } from './models';
import credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

const login = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      throw new Error('Wrong Credentials');
    }

    const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
    if (!isPasswordValid) {
      throw new Error('Wrong Credentials');
    }
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Wrong Credentials');
  }
};
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          console.log('user', user);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user);
      if (account.provider === 'github') {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            console.log(profile.email, profile.login, profile.avatar_url);
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }

      return true;
    },
    // ...authConfig.callbacks,
  },
});

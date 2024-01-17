'use server';
import { revalidatePath } from 'next/cache';
import { Post, User } from './models';
import { connectToDb } from './utils';
import { signIn, signOut } from './auth';

export const addPost = async (formData) => {
  // const title = formData.get('title');
  // const desc = formData.get('desc');
  // const slug = formData.get('slug');
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = Post({ title, desc, slug, userId });
    await newPost.save();
    console.log('New Post Added!');
    revalidatePath('/blog');
  } catch (error) {
    console.log('Something went wrong saving post!', error.message);
  }
};

export const deletePost = async (formData) => {
  // const title = formData.get('title');
  // const desc = formData.get('desc');
  // const slug = formData.get('slug');
  const { postId } = Object.fromEntries(formData);
  console.log(postId);
  try {
    connectToDb();
    await Post.findByIdAndDelete(postId);
    console.log('Post Deleted!');
    revalidatePath('/blog');
  } catch (error) {
    console.log('Something went wrong saving post!', error.message);
  }
};

export const handleGithublogin = async () => {
  'use server';
  await signIn('github');
};

export const handleLogout = async () => {
  'use server';
  await signOut();
};

export const register = async (formData) => {
  const { username, email, img, password, passwordRepeat } = Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: 'Passwords do not match!' };
  }
  try {
    connectToDb();

    const user = await User.findOne({ username });
    if (user) {
      return { error: 'Username already exists!' };
    }
    const newUser = await User({ username, email, password, img });
    await newUser.save();
    console.log('New User Added!');
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong' };
  }
};

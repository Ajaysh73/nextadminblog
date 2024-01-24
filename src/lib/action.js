'use server';
import { revalidatePath } from 'next/cache';
import { Post, User } from './models';
import { connectToDb } from './utils';
import { signIn, signOut } from './auth';
import bcrypt from 'bcryptjs';

export const addPost = async (prevState, formData) => {
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

export const register = async (prevState, formData) => {
  const { username, email, img, password, passwordRepeat } = Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: 'Passwords do not match!' };
  }
  try {
    connectToDb();

    const user = await User.findOne({ username });
    if (user) {
      console.log('Username already exists!');
      return { error: 'Username already exists!' };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log('saved to db');

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { username, password });
  } catch (error) {
    console.log(error);
    if (error.message.includes('CredentialsSignin')) {
      return { error: 'Wrong Credentials' };
    }
    throw error;
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log('saved to db.');
    revalidatePath('/admin');
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong' };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log('deleted  from db');
    revalidatePath('/admin');
    await newUser.save();
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong' };
  }
};

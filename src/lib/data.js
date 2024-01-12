// const users = [
//   {
//     id: 1,
//     name: 'John',
//     age: 30,
//     username: 'John',
//   },
//   {
//     id: 2,
//     name: 'Johnny',
//     age: 35,
//     username: 'Johnny',
//   },
// ];

// const posts = [
//   {
//     id: 1,
//     title: 'Post 1',
//     body: 'This is post 1',
//     userId: 1,
//   },
//   {
//     id: 2,
//     title: 'Post 2',
//     body: 'This is post 2',
//     userId: 2,
//   },
//   {
//     id: 3,
//     title: 'Post 3',
//     body: 'This is post 3',
//     userId: 1,
//   },
//   {
//     id: 4,
//     title: 'Post 4',
//     body: 'This is post 4',
//     userId: 2,
//   },
// ];
// export const getPosts = async () => {
//   return posts;
// };
// export const getUsers = async () => {
//   return users;
// };

// export const getPost = async (id) => {
//   return posts.find((post) => post.id === id);
// };

// export const getUser = async (id) => {
//   return users.find((user) => user.id === id);
// };
import { Post, User } from './models';
import { connectToDb } from './utils';

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get posts!');
  }
};
export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get users!');
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get post!');
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch user!');
  }
};

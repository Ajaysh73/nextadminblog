import { Post } from '@/lib/models';
import { connectToDb } from '@/lib/utils';
import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
  try {
    connectToDb();
    const slug = params.slug;
    const post = await Post.findOne({ slug: slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch post!', error);
  }
};

export const DELETE = async (req, { params }) => {
  try {
    connectToDb();
    const slug = params.slug;
    await Post.deleteOne({ slug: slug });
    return NextResponse.json('Post deleted!');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch post!', error);
  }
};

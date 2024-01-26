import mongoose from 'mongoose';
import { headers } from 'next/headers';
const connection = {};
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error('Error connecting database.' + error);
  }
};

export function getApiUrl(path) {
  const host = headers().get('host');
  console.log(host);
  console.log(process?.env.NODE_ENV);
  const protocal =
    process?.env.NODE_ENV === 'development' || host === 'localhost:3000' ? 'http' : 'https';
  return `${protocal}://${host}${path}`;
}

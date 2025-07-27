import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;
const cached = {};

async function dbConnect() {
  if (!MONGO_URI) {
    throw new Error('Please define the MONGO_URI environment variable inside .env');
  }
  if (cached.connection) {
    return cached.connection;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGO_URI, opts);
    console.log('connected mongo');
  }
  try {
    cached.connection = await cached.promise;
  } catch (error) {
    cached.promise = undefined;
    throw error;
  }
  return cached.connection;
}

export { dbConnect };

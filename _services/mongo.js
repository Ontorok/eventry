import mongoose from 'mongoose';

async function dbConnect() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log('connected mongo');
    return connection;
  } catch (error) {
    console.log(error);
  }
}

export { dbConnect };

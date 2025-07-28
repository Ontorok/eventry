import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;
const cached = {};

async function dbConnect() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected');
    return conn;
  } catch (err) {
    console.log(err);
  }
}

export { dbConnect };

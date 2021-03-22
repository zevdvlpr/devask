import mongoose from 'mongoose';

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;

export const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  return mongoose.connect(
    `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );
};

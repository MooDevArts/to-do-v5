import mongoose from "mongoose";
let cachedDb = null;

async function connectToDb() {
  if (cachedDb) {
    return cachedDb;
  }

  let connection = await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "tasks_next",
  });
  cachedDb = connection;
  return cachedDb;
}

export { connectToDb };

// lib/db.js
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

export async function connectDb() {
  if (db) {
    return db;
  }

  await client.connect();
  db = client.db(); // Connect to the database
  return db;
}

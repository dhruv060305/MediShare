// mongo.js
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function insertFormData(data) {
  try {
    await client.connect();
    const db = client.db("Donaters");
    const collection = db.collection("Profile");
    const result = await collection.insertOne(data);
    console.log("✅ Inserted ID:", result.insertedId);
  } catch (err) {
    console.error("❌ DB Error:", err);
    throw err;
  } finally {
    await client.close();
  }
}

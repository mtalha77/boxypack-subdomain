import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (uri) {
  if (process.env.NODE_ENV === "development") {
    const globalWithMongo = globalThis as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };
    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
} else {
  clientPromise = Promise.reject(new Error("MongoDB URI not configured"));
}

export default clientPromise;

export async function getDatabase(): Promise<Db> {
  if (!uri) throw new Error("MongoDB URI not configured");
  const client = await clientPromise;
  return client.db("BoxyPack");
}

export async function getCollection(collectionName: string) {
  if (!uri) throw new Error("MongoDB URI not configured");
  const db = await getDatabase();
  return db.collection(collectionName);
}

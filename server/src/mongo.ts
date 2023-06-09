import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_CONNECTION_STRING);
const shimiChatDatabase = client.db('ShimiChat');
const usersCollection = shimiChatDatabase.collection('Users');

export async function authenticate(userId: string, passwordHash: string) {
    try {
        const user = await usersCollection.findOne({userId, passwordHash}); 
        return !!user;
    }
    catch {
        return false;
    }
}
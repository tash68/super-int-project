import { MongoClient } from 'mongodb';



const filter = {};

const client = await MongoClient.connect(
    'mongodb+srv://tashogeti:Mongodb68@cluster88.qzckf08.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
);
const coll = client.db('the-tash-cafe').collection('entries');
const cursor = coll.find(filter);
const result = await cursor.toArray();
await client.close();
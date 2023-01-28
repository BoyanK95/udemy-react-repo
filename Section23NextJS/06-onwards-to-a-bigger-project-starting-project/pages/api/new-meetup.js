import { MongoClient } from "mongodb";

// /api/new-meetup
//POST /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body

        const client = await MongoClient.connect('mongodb+srv://Boyan95:12345678910@cluster0.gxnjcll.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db()

        const meetupCollection = db.collection('meetups')
        
        const result = await meetupCollection.insertOne(data)
        console.log(result);

        client.close()

        res.status(201).json({message: 'Meetup inserted!'})
    }
}

export default handler
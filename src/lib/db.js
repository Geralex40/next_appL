const { MongoClient,ServerApiVersion } = require("mongodb")

if(!process.env.db_uri){
    throw new Error("Mongo uri not found in env jeje")
}

const client=new MongoClient(process.env.db_uri,{
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

async function getDB(dbName){
    try{
        await client.connect()
        console.log("Conectado a la DB");
        return client.db(dbName);
    }catch (err){console.log(err);}
}

export async function getCollection(collectionName){
    const db= await getDB('links')
    if(db){
        return db.collection(collectionName);
    }
    return null;
}
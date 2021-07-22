const { MongoClient, ObjectId } = require("mongodb")
const dotenv = require("dotenv")
dotenv.config()

const uri = process.env.CREDENTIALS
const databaseName = "YoutubeLessonJC"

// CONNECT
MongoClient.connect(uri, { useNewUrlParser: true }, async function (error, client) {
  const db = client.db()
  // READ
  // const results = await db.collection("pets").find({ species: "dog" }).toArray()
  // console.log(results)

  // CREATE
  const pets = db.collection("pets")
  // await pets.insertOne({ name: "Bibi", species: "cat", age: 4 })
  // console.log("Added new animal")

  // UPDATE
  // await pets.updateOne({ _id: ObjectId("60f9a1adcef4c6f628d51005") }, { $set: { name: "Boubou" } })
  // console.log("updated document")

  // DELETE
  await pets.deleteOne({ _id: ObjectId("60f9a1adcef4c6f628d51005") })
  console.log("deleted document")
  client.close()
})

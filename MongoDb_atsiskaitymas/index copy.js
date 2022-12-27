const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
require("dotenv").config();

const URI = process.env.URI;
const client = new MongoClient(URI);
const PORT = +process.env.PORT || 5001;

const DB = process.env.DB;
const DBCOLLECTION = process.env.DBCOLLECTION;
const DBCOLLECTION1 = process.env.DBCOLLECTION1;

app.use(express.json());

app.get("/users", async (_, res) => {
  try {
    const connection = await client.connect();

    const namesList = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .toArray();

    await connection.close();

    res.send({ namesList }).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

app.get("/userorders", async (req, res) => {
  //  const filterName = req.body.name;
  try {
    const connection = await client.connect();

    const namesList = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .aggregate([
        {
          $lookup: {
            from: DBCOLLECTION1,
            // localField: "name",
            // foreignField: "orderName",
            // localField: "userId",
            // foreignField: "ObjectId",
            let: { searchId: "$_id" },

            pipeline: [
              {
                $match: {
                  $expr: { $eq: [{ $toObjectId: "$userId" }, "$$searchId"] },
                },
              },
              {
                $project: {
                  _id: 1,
                  userId: 1,
                  orderId: 1,
                  price: 1,
                  orderName: 1,
                },
              },
            ],
            as: "orderdetails",
          },
        },
      ])
      .toArray();

    await connection.close();

    res.send({ namesList }).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));

const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
require("dotenv").config();

const URI = process.env.URI;
const client = new MongoClient(URI);
const PORT = +process.env.PORT || 5001;

const DB = process.env.DB;
const USERS = process.env.DBCOLLECTION;
const MEMBERSHIPS = process.env.DBCOLLECTION1;

app.use(express.json());

app.get("/memberships", async (_, res) => {
  try {
    const connection = await client.connect();

    const membershipsList = await connection
      .db(DB)
      .collection(MEMBERSHIPS)
      .find()
      .toArray();

    await connection.close();

    res.send({ membershipsList }).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

app.post("/memberships", async (req, res) => {
  const { name, price, description } = req.body;

  const id = new Date().getTime().toString(36);
  const lastUpdateDate = new Date().toISOString();

  if (!name) {
    res.status(400).send("Mebership name was not provided.").end();
    return;
  }

  try {
    const con = await client.connect();
    const dbRes = await con.db(DB).collection(MEMBERSHIPS).insertOne({
      id,
      lastUpdateDate,
      name,
      price,
      description,
    });

    await con.close();

    return res.send(dbRes).end();
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

app.delete("/memberships/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).send("ID was not provided.").end();
    return;
  }

  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(MEMBERSHIPS)
      .deleteOne({ memershipId: id });

    await con.close();

    res.send(data).end();
  } catch (error) {
    res.send({ error }).end();
    throw Error(error);
  }
});

app.get("/users/:order", async (req, res) => {
  const { order } = req.params;

  try {
    const connection = await client.connect();

    const userName = await connection
      .db(DB)
      .collection(USERS)
      .find({ name: order })
      .toArray();

    const searchString = userName[0].name;

    const userMembership = await connection
      .db(DB)
      .collection(MEMBERSHIPS)
      .find({ orderName: searchString })
      .toArray();

    await connection.close();

    const userDetails = { ...userName, ...userMembership };

    res.send({ userDetails }).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

app.get("/users", async (_, res) => {
  try {
    const connection = await client.connect();

    const namesList = await connection
      .db(DB)
      .collection(USERS)
      .aggregate([
        {
          $lookup: {
            from: MEMBERSHIPS,
            // localField: "service_id",
            // foreignField: "id",
            localField: "name",
            foreignField: "orderName",

            as: "membershipDetails",
          },
        },
        {
          $replaceRoot: {
            newRoot: {
              $mergeObjects: [
                { $arrayElemAt: ["$membershipDetails", 0] },
                "$$ROOT",
              ],
            },
          },
        },
        { $project: { membershipDetails: 0 } },
      ])
      .toArray();

    await connection.close();

    res.send({ namesList }).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

app.post("/users", async (req, res) => {
  const { name, surname, email, serviceLevel } = req.body;

  if (!name) {
    res.status(400).send("User name was not provided.").end();
    return;
  }

  const id = new Date().getTime().toString(36);
  const lastUpdateDate = new Date().toISOString();
  const service_id = "";

  try {
    const connection = await client.connect();
    const membershipId = await connection
      .db(DB)
      .collection(MEMBERSHIPS)
      .find({ name: serviceLevel })
      .toArray();
    service_id = membershipId.service_id;
    await connection.close();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }

  try {
    const con = await client.connect();
    const dbRes = await con.db(DB).collection(MEMBERSHIPS).insertOne({
      id,
      lastUpdateDate,
      name,
      surname,
      email,
      service_id,
    });

    await con.close();

    return res.send(dbRes).end();
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));

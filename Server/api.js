const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connectionString = "mongodb://127.0.0.1:27017";
let db; // global db reference

// Connect to MongoDB once at server start
MongoClient.connect(connectionString)
  .then(client => {
    console.log("✅ Connected to MongoDB");
    db = client.db("reactdb");

    app.listen(4000, () => {
      console.log("🚀 Server Started : http://127.0.0.1:4000");
    });
  })
  .catch(err => {
    console.error("❌ MongoDB Connection Failed:", err);
  });

// ===================== ROUTES =====================

// GET all users
app.get("/getusers", async (req, res) => {
  try {
    const users = await db.collection("tblusers").find({}).toArray();
    console.log("Users Fetched:", users);
    res.json(users); // always send JSON array
  } catch (err) {
    console.error("Query Error:", err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// POST register user
app.post("/registeruser", async (req, res) => {
  try {
    const userdetails = {
      UserId: req.body.UserId,
      UserName: req.body.UserName,
      Password: req.body.Password,
      Age: parseInt(req.body.Age),
      Mobile: req.body.Mobile,
      Subscribed: req.body.Subscribed === "true"
    };

    await db.collection("tblusers").insertOne(userdetails);
    console.log("✅ User Inserted:", userdetails);

    res.json({ message: "User inserted successfully" }); // ✅ send JSON instead of redirect
  } catch (err) {
    console.error("Insert Error:", err);
    res.status(500).json({ error: "Failed to insert user" });
  }
});

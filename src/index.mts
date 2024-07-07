import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world from pushpend3r ec2 instance");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});

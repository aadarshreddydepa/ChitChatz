import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Hello and Welcome to ChitChatz");
});
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is Running at port number ${PORT}`);
  connectDB();
});

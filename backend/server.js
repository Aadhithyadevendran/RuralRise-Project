import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectMongoDB from "./db/connectMongoDB.js";
import authRoute from "./routes/auth.route.js";

const app = express();

dotenv.config();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://ruralrise-rn1w.onrender.com"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

// all my routes are here
app.use("/api/v1/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});

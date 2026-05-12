import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import cors from "cors"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", userRoute);
// "http://localhost:8000/api/v1/user/register"

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});

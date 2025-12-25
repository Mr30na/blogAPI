import express from "express";
import indexRouter from "./routes/index.mjs";
import mongoose from "mongoose";
import "dotenv/config"

const app = express();
const PORT = process.env.PORT || 3000;
const DB_SERVER = process.env.DB_URL || "mongodb://127.0.0.1:27017/blogs";

app.use(express.json());
mongoose.connect(DB_SERVER)
.then(()=>{
    console.log("connected to database server");
}).catch((err)=>{
    console.log(err);
})
app.use("/posts",indexRouter)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
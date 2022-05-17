const express = require("express");
const dotenv = require("dotenv");

const routers = require("./routers/index");

const cors = require("cors");
const app = express();


app.use(express.json());
dotenv.config({
  path: "./config/env/config.env",
});


const PORT = process.env.PORT;
app.use(cors());

app.use("/api", routers);


app.listen(PORT, () => {
  console.log(`app started on ${PORT}:${process.env.NODE_ENV}`);
});

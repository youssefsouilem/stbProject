const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require("cors");
dotenv.config();

const DepartmentRouter = require("./routes/Departement");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:4200"], // Allow requests from this origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);
mongoose.connect("mongodb://localhost:27017/Departement");
app.use("api/department/region", DepartmentRouter);
app.use("api/department/adresse", DepartmentRouter);

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



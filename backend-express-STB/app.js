const express = require("express");
const axios = require('axios');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require("cors");

dotenv.config(); // Load environment variables from .env file

const app = express(); // Initialize 'app' before using it

app.use(express.json()); // Middleware to parse JSON request bodies

app.use(
  cors({
    origin: ["http://localhost:4200"], // Allow requests from this origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);
mongoose.set('debug', true);

/*mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});*/
  
const AgentRouter = require("./Agent/routes/Agent");
const DepartmentRouter = require("./Departement/routes/Departement");

app.use("/api/agent", AgentRouter);
app.use("/api/department", DepartmentRouter);

app.get("/hello", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

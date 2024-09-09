const express = require("express");
const router = express.Router();
const Agent = require("../Model/ModelAgent.js");
const connect =require('../../mongoconnect')
const mongoose = require("mongoose");


async function findNomPrenomByDepartmentId(departmentID) {
    try {
        mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});//        const agents = await Agent.find({ "dept_matricule": departmentID }, 'nom prenom').exec();

const agents = await Agent.find({ "dept_matricule": departmentID }, 'nom prenom').exec();
//console.log(agents)
    return agents;
    } catch (error) {
    console.error('Error FINDING agent:', error);
      throw error;
    }
  }
  module.exports = {
    findNomPrenomByDepartmentId}
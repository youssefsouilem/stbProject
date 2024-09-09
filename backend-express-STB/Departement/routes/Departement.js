const express = require("express");
const mongoose = require('mongoose');
const agentController =require("../../Agent/controller/agentController.js")
const axios = require('axios');
const router = express.Router();
const DepartmentModel = require("../Model/ModelDept.js");


router.post("/add", async (req, res) => {
    const {matricule,Nom_departement,Email,num_tel,Adresse,Ville,Gouvernement,Region,Responsable} = req.body;
    console.log(req.body); // Log the request body to check if it's received
    try {
      mongoose.connect("mongodb://localhost:27017/stbBase")
  .then(() => {
    console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
      console.log("connected")
    const newDpt = new DepartmentModel({
      matricule,
      Nom_departement,
      Email,
      num_tel,
      Adresse,
      Ville,
      Gouvernement,
      Region,
      Responsable,
    });
  
   
    console.log('Saving new department to database...'); // Log before saving
    const savedDpt = await newDpt.save();

    console.log('Department added:', savedDpt);
    console.log('Department saved successfully'); // Log after saving
    
    return res.status(201).json({ message: "Department added", status: true, department: newDpt });
  } catch (err) {
    console.error('Error while saving department:', err); // Log the complete error object

    // Check for MongoDB validation errors
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: "Validation error", status: false, error: err.message });
    }
    
    // Return a 500 error for any other errors
    return res.status(500).json({ message: "Server error", status: false, error: err.message });
  }
});







  router.get("/getAllDepartments", async (req, res) => {
  mongoose.connect("mongodb://localhost:27017/stbBase")
  .then(() => {
    console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
    const AllDepartmentss = await DepartmentModel.find({});
    return res.json(AllDepartmentss );
  });








  router.post("/GetByregion", async (req, res) => {
    
    try {
      mongoose.connect("mongodb://localhost:27017/stbBase")
  .then(() => {
    console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
  const {departmentRegion} = req.body;
    console.log("region Parameter:", departmentRegion);
    const departments = await DepartmentModel.find({ departmentRegion });

    // Array to hold the final results
    let results = [];

    // Step 2: Iterate through each department
    for (const department of departments) {
      // Fetch the agent details for the current department
      console.log(department.matricule);
      const agentsNomEtPrenom = await agentController.findNomPrenomByDepartmentId(department.matricule);
      const { nom, prenom } = agentsNomEtPrenom[0] || { nom: '', prenom: '' };

      console.log(agentsNomEtPrenom)
      // Step 3: Construct the department object with agent details
      let departmentToGet = {
        matricule: department.matricule,
        Nom_departement: department.Nom_departement,
        Email: department.Email,
        num_tel: department.num_tel,
        Adresse: department.Adresse,
        Responsable: department.Responsable,
        Ville: department.Ville,
        Gouvernement: department.Gouvernement,
        Region: department.Region, // Assuming `Region` is a field in the department
        listeAgents: agentsNomEtPrenom.map(agent => ({
          nom: agent.nom,
          prenom: agent.prenom
        }))      
      };

      // Add the constructed object to the results array
      results.push(departmentToGet);
    }
    

    // Step 4: Return the results array
    return res.json( results );

  
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", status: false, error: error.message });
    }
  });








  router.post('/GetByAdresse', async (req, res) => {
    try {
      mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
      const { Ville, Gouvernement } = req.body;
      console.log('Received infos:', Ville, Gouvernement );  // Log matricule for debugging

      if (!Ville || !Gouvernement) {
        return res.status(400).send('Missing required query parameters: ville and gouvernement');
      }
  
      const departments = await DepartmentModel.find({ Ville, Gouvernement });
      if (!departments) return res.status(404).json({ status: false, message: "department not found" });

    // Array to hold the final results
    let results = [];

    // Step 2: Iterate through each department
    for (const department of departments) {
      // Fetch the agent details for the current department
      console.log(department.matricule);
      const agentsNomEtPrenom = await agentController.findNomPrenomByDepartmentId(department.matricule);
      const { nom, prenom } = agentsNomEtPrenom[0] || { nom: '', prenom: '' };

      console.log(agentsNomEtPrenom)
      // Step 3: Construct the department object with agent details
      let departmentToGet = {
        matricule: department.matricule,
        Nom_departement: department.Nom_departement,
        Email: department.Email,
        num_tel: department.num_tel,
        Adresse: department.Adresse,
        Responsable: department.Responsable,
        Ville: department.Ville,
        Gouvernement: department.Gouvernement,
        Region: department.Region, // Assuming `Region` is a field in the department
        listeAgents: agentsNomEtPrenom.map(agent => ({
          nom: agent.nom,
          prenom: agent.prenom
        }))      
      };

      // Add the constructed object to the results array
      results.push(departmentToGet);
    }
    

    // Step 4: Return the results array
    return res.json( results );

      
      
    } catch (error) {
      console.error('Error fetching departments:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  module.exports = router;

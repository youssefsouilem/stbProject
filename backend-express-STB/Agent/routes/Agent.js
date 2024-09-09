const express = require("express");
const router = express.Router();
const AgentModel = require("../Model/ModelAgent.js");
const connect =require('../../mongoconnect')
const mongoose = require("mongoose");

// Add Agent
router.post("/add", async (req, res) => {
  const { nom, prenom, num_tel, agence, siege, adresse, poste, matricule } = req.body;
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
    const newAgent = new AgentModel({
      nom,
      prenom,
      num_tel,
      agence,
      siege,
      adresse,
      poste,
      matricule
    });
    
    
    console.log('Saving new agent to database...'); // Log before saving
    const savedAgent = await newAgent.save();

    console.log('Agent added:', savedAgent);
    console.log('Agent saved successfully'); // Log after saving
    
    return res.status(201).json({ message: "Agent added", status: true, agent: newAgent });
  } catch (err) {
    console.error('Error while saving agent:', err); // Log the complete error object

    // Check for MongoDB validation errors
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: "Validation error", status: false, error: err.message });
    }
    
    // Return a 500 error for any other errors
    return res.status(500).json({ message: "Server error", status: false, error: err.message });
  }
});


// 1. Search by matricule
router.post("/getAgentbyMatricule", async (req, res) => {
  try {
    mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
  const { matricule } = req.body;
  console.log('Received matricule:', matricule);  // Log matricule for debugging


    console.log('Searching for an agent in the database...');
    const agent = await AgentModel.find({ "matricule":matricule }).exec();
    console.log(agent)
    if (!agent) return res.status(404).json({ status: false, message: "Agent not found" });
    
    return res.json( agent );
  } catch (error) {
    console.error('Error while searching agent:', error.message); // Log only the error message
    return res.status(500).json({ message: "Error finding agent", error: error.message });
  }
  });
// 2. Search by nom
router.post("/getAgentByNom", async (req, res) => {
  const { nom } = req.body;
  try {
    mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
console.log('Searching for agents by nom in the database...');

    const agent =  await AgentModel.find({ "nom":nom });
    if (!agent) return res.status(404).json({ status: false, message: "Agent not found" });
    return res.json( agent );
  } catch (error) {
    return res.status(500).json({ message: "Error finding agent", error: error.message });
  }
});

// 3. Search by prenom
router.post("/getAgentbyPrenom", async (req, res) => {
  const { prenom } = req.body;
  try {
    mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
    const agent =  await AgentModel.find({ "prenom":prenom });
    if (!agent) return res.status(404).json({ status: false, message: "Agent not found" });
    return res.json(agent);
  } catch (error) {
    return res.status(500).json({ message: "Error finding agent", error: error.message });
  }
});

// 4. Search by poste
router.post("/getAgentbyPoste", async (req, res) => {
  const { poste } = req.body;
  try {
    mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

    const agent =  await AgentModel. find({ "poste":poste });
    if (!agent) return res.status(404).json({ status: false, message: "Agent not found" });
     return res.json(agent);
  } catch (error) {
    return res.status(500).json({ message: "Error finding agent", error: error.message });
  }
});

// 5. Search by nom and prenom
router.post("/getAgentbyNomAndPrenom", async (req, res) => {
  const { nom, prenom } = req.body;
  try {
    mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
    const agent = await  AgentModel. find({ "nom":nom, "prenom":prenom });
    if (!agent) return res.status(404).json({ status: false, message: "Agent not found" });
     return res.json(agent);
  } catch (error) {
    return res.status(500).json({ message: "Error finding agent", error: error.message });
  }
});

// 6. Search by nom and matricule
router.post("/getAgentbyNomAndMatricule", async (req, res) => {
  const { nom, matricule } = req.body;
  try {
    mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
    const agent =  await AgentModel. find({"nom": nom,"matricule": matricule });
    if (!agent) return res.status(404).json({ status: false, message: "Agent not found" });
     return res.json(agent);
  } catch (error) {
    return res.status(500).json({ message: "Error finding agent", error: error.message });
  }
});

// 7. Search by prenom and matricule
router.post("/getAgentbyPrenomAndMatricule", async (req, res) => {
  const { prenom, matricule } = req.body;
  try {
    mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
    const agent =  await AgentModel. find({ "prenom":prenom, "matricule":matricule });
    if (!agent) return res.status(404).json({ status: false, message: "Agent not found" });
     return res.json(agent);
  } catch (error) {
    return res.status(500).json({ message: "Error finding agent", error: error.message });
  }
});

// 8. Search by poste and matricule
router.post("/getAgentbyPosteAndMatricule", async (req, res) => {
  const { poste, matricule } = req.body;
  try {
    mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
    const agent =  await AgentModel. find({ "poste":poste, "matricule":matricule });
    if (!agent) return res.status(404).json({ status: false, message: "Agent not found" });
     return res.json(agent);
  } catch (error) {
    return res.status(500).json({ message: "Error finding agent", error: error.message });
  }
});

// 9. Search by nom and poste
router.post("/getAgentbyNomAndPoste", async (req, res) => {
  const { nom, poste } = req.body;
  try {
    mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
    const agent =  await AgentModel. find({ "nom":nom, "poste":poste });
    if (!agent) return res.status(404).json({ status: false, message: "Agent not found" });
     return res.json(agent);
  } catch (error) {
    return res.status(500).json({ message: "Error finding agent", error: error.message });
  }
});

// 10. Search by prenom and poste
router.post("/getAgentbyPrenomAndPoste", async (req, res) => {
  const { prenom, poste } = req.body;
  try {
    mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
    const agent = await  AgentModel. find({ "prenom":prenom, "poste":poste });
    if (!agent) return res.status(404).json({ status: false, message: "Agent not found" });
     return res.json(agent);
  } catch (error) {
    return res.status(500).json({ message: "Error finding agent", error: error.message });
  }
});

// 11. Search by nom, prenom, and poste
router.post("/getAgentbyNomPrenomAndPoste", async (req, res) => {
  const { nom, prenom, poste } = req.body;
  try {
    mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
    const agent =  await AgentModel. find({ "nom":nom , "prenom":prenom, "poste":poste });
    if (!agent) return res.status(404).json({ status: false, message: "Agent not found" });
     return res.json(agent);
  } catch (error) {
    return res.status(500).json({ message: "Error finding agent", error: error.message });
  }
});

// 12. Search by nom, prenom, and matricule
router.post("/getAgentbyNomPrenomAndMatricule", async (req, res) => {
  const { nom, prenom, matricule } = req.body;
  try {
    mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
    const agent =  await AgentModel. find({ "nom":nom, "prenom":prenom, "matricule":matricule });
    if (!agent) return res.status(404).json({ status: false, message: "Agent not found" });
     return res.json(agent);
  } catch (error) {
    return res.status(500).json({ message: "Error finding agent", error: error.message });
  }
});

// 13. Search by nom, poste, and matricule
router.post("/getAgentbyNomPosteAndMatricule", async (req, res) => {
  const { nom, poste, matricule } = req.body;
  try {
    mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
    const agent =  await AgentModel. find({ "nom":nom, "poste":poste, "matricule":matricule });
    if (!agent) return res.status(404).json({ status: false, message: "Agent not found" });
     return res.json(agent);
  } catch (error) {
    return res.status(500).json({ message: "Error finding agent", error: error.message });
  }
});

// 14. Search by prenom, poste, and matricule
router.post("/getAgentbyPrenomPosteAndMatricule", async (req, res) => {
  const { prenom, poste, matricule } = req.body;
  try {
    mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
    const agent =   await AgentModel. find({"prenom":prenom,"poste":poste, "matricule":matricule });
    if (!agent) return res.status(404).json({ status: false, message: "Agent not found" });
     return res.json(agent);
  } catch (error) {
    return res.status(500).json({ message: "Error finding agent", error: error.message });
  }
});

// 15. Search by all fields (nom, prenom, poste, matricule)
router.post("/getAgentbyAllFields", async (req, res) => {
  const { nom, prenom, poste, matricule } = req.body;
  try {
    mongoose.connect("mongodb://localhost:27017/stbBase")
.then(() => {
  console.log('Connected to MongoDB:', mongoose.connection.db.databaseName);  // Log the connected database name
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
    const agent =   await AgentModel. find({ "nom":nom, "prenom":prenom, "poste":poste, "matricule":matricule });
    if (!agent) return res.status(404).json({ status: false, message: "Agent not found" });
     return res.json(agent);
  } catch (error) {
    return res.status(500).json({ message: "Error finding agent", error: error.message });
  }
});

module.exports = router;

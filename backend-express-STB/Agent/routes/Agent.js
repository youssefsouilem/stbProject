const express = require("express");
const axios = require('axios');
const router = express.Router();
const AgentModel = require("../Model/ModelAgent.js");

router.post("/add", async (req, res) => {
  const { nom, prenom, num_tel, agence, siege, adresse, poste, matricule } = req.body;

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

  await newAgent.save();
  return res.json({ message: "Agent added", status: true });
});

router.get("/getAllagents", async (req, res) => {
  const allAgents = await AgentModel.find({});
  return res.json({ status: true, data: allAgents });
});

router.get("/getAgentbyMatricule/:matricule", async (req, res) => {
  const agentMatricule = req.params.matricule;
  console.log("Matricule Parameter:", agentMatricule);

  try {
    const agent = await AgentModel.find({ matricule: agentMatricule });

    if (!agent) {
      return res.status(404).json({ status: false, message: "Agent not found" });
    }

    return res.json({ status: true, data: agent });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", status: false, error: error.message });
  }
});

router.get("/getAgentbyPrenom/:prenom", async (req, res) => {
  const agentprenom = req.params.prenom;
  console.log("prenom Parameter:", agentprenom);

  try {
    const agent = await AgentModel.find({ prenom: agentprenom });

    if (!agent) {
      return res.status(404).json({ status: false, message: "Agent not found" });
    }

    return res.json({ status: true, data: agent });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", status: false, error: error.message });
  }
});

router.get("/getAgentbynom/:nom", async (req, res) => {
  const agentnom = req.params.nom;
  console.log("nom Parameter:", agentnom);

  try {
    const agent = await AgentModel.find({ nom: agentnom });

    if (!agent) {
      return res.status(404).json({ status: false, message: "Agent not found" });
    }

    return res.json({ status: true, data: agent });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", status: false, error: error.message });
  }
});

router.get("/getAgentbyPoste/:poste", async (req, res) => {
  const agentposte = req.params.poste;
  console.log("poste Parameter:", agentposte);

  try {
    const agent = await AgentModel.find({ poste: agentposte });

    if (!agent) {
      return res.status(404).json({ status: false, message: "Agent not found" });
    }

    return res.json({ status: true, data: agent });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", status: false, error: error.message });
  }
});
router.get("/getAgent", async (req, res) => {
  const { nom, prenom, matricule, poste } = req.query;

  console.log("Parameters:", { nom, prenom, matricule, poste });

  try {
    const agent = await AgentModel.findOne({
      nom: nom,
      prenom: prenom,
      matricule: matricule,
      poste: poste
    });

    if (!agent) {
      return res.status(404).json({ status: false, message: "Agent not found" });
    }

    return res.json({ status: true, data: agent });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", status: false, error: error.message });
  }
});

module.exports = router;

////////////////////////////////////////////////////////////////////////
// router.post("/getUserPost", async (req, res) => {
//   const { idFromToken } = req.body;

//   // Search for posts where the user ID (idconducteur) matches idFromToken
//   const userPosts = await PostModel.find({ idconducteur: idFromToken });

//   if (!userPosts) {
//     return res.json({ status: false, message: "No posts found for this user" });
//   }

//   return res.json({ status: true, data: userPosts });
// });

// router.post("/getIdPost", async (req, res) => {
//   const { id } = req.body;

//   // Search for posts where the user ID (idconducteur) matches idFromToken
//   const idPosts = await PostModel.find({ _id: id });

//   if (!idPosts) {
//     return res.json({ status: false, message: "No posts found for this user" });
//   }

//   return res.json({ status: true, data: idPosts });
// });

// const PostRouter = router;
// module.exports = PostRouter;

const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  num_tel: { type: Number, required: true },
  agence: { type: String, required: true },
  email: { type: String},
  adresse: { type: String, required: true },
  poste: { type: String, required: true },
  matricule: { type: Number, required: true,unique: true },
  dept_matricule:{type:Number, required:true}
});

const AgentModel = mongoose.model('Agent', agentSchema);
module.exports = AgentModel;
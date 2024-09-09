const mongoose = require("mongoose")
const Schema = mongoose.Schema
const DepartementSchema = new Schema({
    Nom_departement: { type: String, required: true },
    Email: { type: String, required: true },
    num_tel: { type: Number, required: true },
    Gouvernement: { type: String, required: true },
    email: { type: String},
    adresse: { type: String, required: true },
    Ville: { type: String, required: true },
    matricule: { type: Number, required: true,unique: true },
    Region:{type:String, required:true},
    Responsable :{ type: String, required: true }
});
    
const Department = mongoose.model("Departement",DepartementSchema);
module.exports = Department;
/*  matricule,Nom_departement,Email,Adresse,num_tel,Ville,Gouvernement,Region,Responsable*/
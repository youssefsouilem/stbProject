const mongoose = require("mongoose")
const Schema = mongoose.Schema
const DepartementSchema = new Schema({
    Nom_departement : String ,
    Adresse : String ,
    Numéro_de_téléphone : Number,
    Ville : String , 
    Email : String , 
    Responsable : String,
    Gouvernement : String,
    Region : String,
});
const Agent = mongoose.model("Departement",DepartementSchema);
module.exports = Departement;
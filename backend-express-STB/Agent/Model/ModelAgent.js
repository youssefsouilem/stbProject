const mongoose = require("mongoose")
const Schema = mongoose.Schema
const userSchema = new Schema({
    nom : String ,
    prenom : String ,
    num_tel : Number,
    agence : String , 
    siege : String,
    adresse : String,
    poste :String,
     matricule: {
        type: String,
        unique: true,  
        required: true 
    }
});
const Agent = mongoose.model("Agent",userSchema);
module.exports = Agent;
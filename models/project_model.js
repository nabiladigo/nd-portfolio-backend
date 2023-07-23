const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    { 
        name:{
            type:String,
            required: true
        },
        live:{
            type:String
        },
        gitbackend:{
            type:String
        },
        gitfrontend:{
            type:String
            
        },
        image:{
            type:String,
            required:true
        }
    }
);



const Project= mongoose.model('Project', projectSchema);

module.exports = Project;

var express = require('express');
var update= express.Router();
const neo4j = require('neo4j-driver');
const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', '0000' ));
const session = driver.session();



update.get('/edit', function(req,res){


    //afficher patient
    session
    .run('MATCH (n:patient) where n.Id_patient = $id SET n.Emergency = true RETURN n', {id:"patient1"})
    .then(function (){
        console.log("ok");

        })
        
   
    .catch(function(err){
        console.log(err);
    })
        });

      
module.exports = update;
var express = require('express');
var show= express.Router();
const neo4j = require('neo4j-driver');
const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', '0000' ));
const session = driver.session();



show.get('/patients', function(req,res){


    //afficher patient
        session
        .run('MATCH (n:patient) RETURN n')
        .then(function(patientresult){
            var patientArr=[];
            patientresult.records.forEach(function(record){
                patientArr.push({
                    Id_patient:record._fields[0].properties.Id_patient , 
                    Id_med_file:record._fields[0].properties.Id_med_file	,
                    Sickness:record._fields[0].properties.Sickness,
                    DateOfAddmission:record._fields[0].properties.DateOfAddmission,
                    Gender:record._fields[0].properties.Gender,
                    Allergies:record._fields[0].properties.Allergies,
                    Age:record._fields[0].properties.Age,
                    BirthDate:record._fields[0].properties.BirthDate,
                    Name:record._fields[0].properties.Name ,                   
                    Emergency:record._fields[0].properties.Emergency

                });
            })
            
        res.render('patient',{
                
                Patient:patientArr
        });
    })

        .catch(function(err){
            console.log(err);
        })
        });

      
module.exports = show;
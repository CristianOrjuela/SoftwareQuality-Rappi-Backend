// Requires
const express = require('express');

// Imports
const { addNewUserService } = require('../services/index');

// Controllers
const addNewUser = async (request, response) => {

    // Result from the service query
    const serviceResult = await addNewUserService();

    if(serviceResult){
        response.status(200).json({data: serviceResult}); 
    }else{
        response.status(500).json({data: 'error'}); 
    }

};

// Exporting the controllers
module.exports = {
    addNewUser
}
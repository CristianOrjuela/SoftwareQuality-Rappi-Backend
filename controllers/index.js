// Requires
const express = require('express');

// Imports
const { addNewUserService } = require('../services/index');

// Controllers
const addNewUser = async (request, response) => {

    try {
        const newDataFromService = addNewUserService();
        response.status(201).json({data: newDataFromService()});
    } catch (error) {
        response.json( 'Error usuario: ' + error );
    }

};

// Exporting the controllers
module.exports = {
    addNewUser
}
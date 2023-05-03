// Requires
const express = require('express');

// Imports
const { createUserService } = require('../services/index');

// Controllers
const createUser = async (request, response) => {

    // Result from the service query
    const serviceResult = await createUserService();

    if(serviceResult){
        response.status(200).json({data: 'Created user'}); 
    }else{
        response.status(500).json({data: 'error'}); 
    }

};

const deleteUser = async (request, response) => {

    // Result from the service query
    const serviceResult = await createUserService();

    if(serviceResult){
        response.status(200).json({data: 'Deleted user'}); 
    }else{
        response.status(500).json({data: 'error'}); 
    }

};

const updateUser = async (request, response) => {

    // Result from the service query
    const serviceResult = await createUserService();

    if(serviceResult){
        response.status(200).json({data: 'Updated user'}); 
    }else{
        response.status(500).json({data: 'error'}); 
    }

};

const listUser = async (request, response) => {

    // Result from the service query
    const serviceResult = await createUserService();

    if(serviceResult){
        response.status(200).json({data: 'Listed user'}); 
    }else{
        response.status(500).json({data: 'error'}); 
    }

};

// Exporting the controllers
module.exports = {
    createUser, deleteUser, updateUser, listUser
}
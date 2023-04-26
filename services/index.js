// Requires
const express = require('express');
const { Customer } = require('./models/customer');

// Services
const addNewUserService = async () => {

    try {
        const customerList = await Customer.findAll();     
        return customerList;
    } catch (e) {
        throw error;
    }
    

};

// Exporting the services
module.exports = {
    addNewUserService
}
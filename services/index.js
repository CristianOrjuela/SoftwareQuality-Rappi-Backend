// Requires
const express = require('express');
const { Customer } = require('./models/customer');

// Services
const createUserService = async () => {

    try {
        // TODO: Update the sequelize process to create
        const customerList = await Customer.create();
        return customerList;
    } catch (e) {
        throw error;
    }

};

const listUserService = async () => {

    try {
        // TODO: Update the sequelize process to list
        const customerList = await Customer.findAll();
        return customerList;
    } catch (e) {
        throw error;
    }
    
};

const updateUserService = async () => {

    try {
        // TODO: Update the sequelize process to update
        const customerList = await Customer.update();
        return customerList;
    } catch (e) {
        throw error;
    }

};

const deleteUserService = async () => {

    try {
        // TODO: Update the sequelize process to delete
        const customerList = await Customer.destroy();
        return customerList;
    } catch (e) {
        throw error;
    }
    
};


// Exporting the services
module.exports = {
    createUserService, listUserService
}
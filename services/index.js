// Requires
const express = require('express');

// Services
const addNewUserService = ( ) => {

    // Dummy data
    const getSomeDataFromDataBase = [
        {
            id: 1,
            name: "User 1",
            credits: "10000"
        },
        {
            id: 2,
            name: "User 2",
            credits: "20000"
        },
        {
            id: 3,
            name: "User 3",
            credits: "30000"
        }
    ];

    return getSomeDataFromDataBase;

};

// Exporting the services
module.exports = {
    addNewUserService
}
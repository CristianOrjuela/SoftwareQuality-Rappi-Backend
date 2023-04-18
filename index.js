// Auxiliar Libraries
const express = require('express');

// Database Connection 
const { db_connection } = require('./database/connection');

// Using express
const app = express();

// Defining API port
app.set('port', process.env.PORT || 4000);

// Middleware
app.use(express.json());

try {
    const db_status = db_connection.authenticate();
    console.log("Connection has been established successfully");
} catch (error) {
    console.log("Unable to connect to database", error);
}

// Initialize server
app.listen( app.get('port'), () => {
    console.log("Server in port: ", app.get('port'));
} )
// Imports
const express = require('express');
const { Router } = require('express');

// Import the controllers
const { addNewUser } = require('../controllers/index');

// Initializing the router
const router = express.Router();

// Routes
router.get('/user/add', addNewUser );

// Exporting the router
module.exports = router;
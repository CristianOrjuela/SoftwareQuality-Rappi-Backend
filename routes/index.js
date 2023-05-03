// Imports
const express = require('express');
const { Router } = require('express');

// Import the controllers
const { listUser, deleteUser, createUser, updateUser } = require('../controllers/index');

// Initializing the router
const router = express.Router();

// Routes
router.get('/user/list', listUser );

router.delete('/user/delete', deleteUser );

router.put('/user/update', updateUser );

router.post('/user/create', createUser );

// Exporting the router
module.exports = router;
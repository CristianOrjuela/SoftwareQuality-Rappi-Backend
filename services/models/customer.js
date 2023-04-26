// Data types from Sequelize
const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize');

// Database connection
const { db_connection } = require('../../database/connection');

// Customer
const Customer = db_connection.define('customer', {
    idCustomer: {
        type: Sequelize.UUID,
        primaryKey: true,
    },
    Cust_Names : { 
        type: DataTypes.STRING
    },
    Cust_Last_Names : { 
        type: DataTypes.STRING
    }, 
    Cust_Phone_Number :{ 
        type: DataTypes.STRING
    },
    Cust_Direction :{ 
        type: DataTypes.STRING
    },  
    Cust_Email : { 
        type: DataTypes.STRING
    }, 
    Cust_NIT : { 
        type: DataTypes.STRING
    }, 
    Cust_Company_Name : { 
        type: DataTypes.STRING
    },
}, {
    tableName: 'customer',
    freezeTableName: true
});

module.exports = {
    Customer
};



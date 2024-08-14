
const {DataTypes, Model} = require('sequelize');

const {sequelize } = require('../config/database');

const Task = sequelize.define('Task',{
       task_name :{
              type:DataTypes.STRING,  
              allowNull:false,     
       },
       description:{
              type:DataTypes.STRING,
              allowNull:false
       },
       status:{
              type:DataTypes.STRING,
              allowNull:false
       },
       duedate:{
              type:DataTypes.DATE,
              allowNull:false
       }
})

module.exports = Task
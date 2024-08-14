const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_learn','root','',{
       host:'localhost',
       dialect:'mysql'

})
module.exports = {sequelize};

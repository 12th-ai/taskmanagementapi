const express = require('express');
const cors = require('cors')

const routertask = require('./Routers/task');
const {sequelize} = require('./config/database');

const port = 3001
const app = express();


app.use(express.json());
app.use(cors())

app.use('/api/task',routertask);

sequelize.sync()


app.listen(port,()=>{
       console.log('app is learning')
})
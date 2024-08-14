
const {createtask,gettask,gettaskbyid,deletebyid,updateTask} = require('../Controllers/Taskcontrol');

const {validateTask,handleValidationErrors} = require('../Middleware/validation/validation');

const express = require('express');

const router = express.Router();


 router.post('/',validateTask ,handleValidationErrors, createtask);
 router.get('/',gettask);
 router.get('/:id',gettaskbyid);
 router.delete('/:id',deletebyid);
 router.put('/:id',validateTask,handleValidationErrors, updateTask);
 


 module.exports = router
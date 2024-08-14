const { isLength } = require('validator');
const task = require('../../models/Task');

const {body , validationResult} = require('express-validator');

const validateTask =[

       body('task_name').notEmpty().withMessage("task name can't be empty")

       .isLength({min:5}).withMessage('title must have atleast 5 character'),

       body('description').notEmpty().withMessage('task must have description '),

       body('duedate').isISO8601().withMessage('date is invalid')
];
const handleValidationErrors = (req, res, next) => {
const errors = validationResult(req);

if(!errors.isEmpty()){
       return res.status(400).json({errors:errors.array()});
}

next();
}



module.exports = {validateTask,handleValidationErrors}


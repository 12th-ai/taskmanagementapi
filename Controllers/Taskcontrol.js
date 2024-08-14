const Task = require('../models/Task');

const createtask = async(req,res)=>{

       const {task_name,description,status,duedate} = req.body;

       try{
              const newTask = await Task.create(
                     {
                            task_name,
                            description,
                            status,
                            duedate
                     }
              )

              res.status(201).json({message:'task created successfully'})
              
       }
       catch(error){
              res.status(500).json({error:error.message});
              console.log(error)
       }
}

const gettask = async(req,res)=>{

       try{
         const tasks = await Task.findAll();

         res.status(201).json(tasks)
       }
       catch(error){
              res.status(500).json({error:error.message})
       }
}

const gettaskbyid = async(req,res)=>{

       const {id} = req.params

       try{
         const tasks = await Task.findByPk(id);

         if (tasks) {
              res.status(200).json(tasks);
          } else {
              res.status(404).json({ error: 'Task not found' });
          }
       }
       catch(error){
              res.status(500).json({error:error.message})
       }
}

const deletebyid = async(req,res)=>{

       const {id} = req.params

       try{
         const tasks = await Task.findByPk(id);

         if (tasks) {
        await  tasks.destroy();
        res.status(201).json({ error: 'Task deleted successful' });
          } else {
              res.status(404).json({ error: 'Task not found' });
          }
       }
       catch(error){
              res.status(500).json({error:error.message})
       }
}

updateTask = async (req, res) => {
       const { id } = req.params;
       const { task_name, description, duedate } = req.body;
       try {
           const task = await Task.findByPk(id);
           if (task) {
               task.task_name = task_name;
               task.description = description;
               task.duedate = duedate;
               await task.save();
               res.status(200).json(task);
           } else {
               res.status(404).json({ error: 'Task not found' });
           }
       } catch (error) {
           res.status(500).json({ error: 'Error updating task' });
       }
   };

module.exports = {
       createtask,
       gettask,
       gettaskbyid,
       deletebyid,
       updateTask
}
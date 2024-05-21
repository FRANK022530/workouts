const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')



//get all workouts
const getWorkOuts = async(req,res) =>{
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//get single workouts
const getSingleWorkOuts = async(req,res) =>{
    const {id} =req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such workout" })
    }

    const workouts = await Workout.findById(id)
    if(!workouts){
        return res.status(404).json({error:"no such workout"})
    }

    res.status(200).json(workouts)
}
//create new workouts
const createWorkOut = async(req,res) => {

    const { title, load, reps } = req.body;
    try {
      const workout = await Workout.create({ title, load, reps });

      await workout.save()
      res.status(200).json(workout); 
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

}

//delete workouts
const deleteWorkOut = async(req,res)=>{
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such workout" })
    }

    const workout = await Workout.findByIdAndDelete(id)

    if(!workout){
        return res.status(404).json({error: "no such workout" })
    }

    res.status(200).json(workout)



}



//update workouts
const updateWorkOut = async(req,res)=>{
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such workout" })
    }

    const workout = await Workout.findByIdAndUpdate(id,{
        ...req.body
    })

    if(!workout){
        return res.status(404).json({error: "no such workout" })
    }

    res.status(200).json(workout)



}






module.exports =
{
    createWorkOut,
    getWorkOuts,
    getSingleWorkOuts,
    deleteWorkOut,
    updateWorkOut
}
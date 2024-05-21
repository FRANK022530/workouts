const express =  require('express')
const Workout = require('../models/workoutModel')
const {     
    createWorkOut,
    getWorkOuts,
    getSingleWorkOuts,
    deleteWorkOut,
    updateWorkOut

       } = require('../controllers/workoutController')

const router = express.Router()

router.get('/',getWorkOuts);
router.get('/:id',getSingleWorkOuts);
router.post('/', createWorkOut);
router.delete('/:id',deleteWorkOut);
router.patch('/:id',updateWorkOut)


module.exports =router

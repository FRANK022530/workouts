const express = require("express");
const router = express.Router();

const {     
    createWorkOut,
    getWorkOuts,
    getSingleWorkOuts,
    deleteWorkOut,
    updateWorkOut

       } = require('../controllers/workoutController')


router.get('/',getWorkOuts);
router.get('/:id',getSingleWorkOuts);
router.post('/', createWorkOut);
router.delete('/:id',deleteWorkOut);
router.patch('/:id',updateWorkOut)


module.exports =router

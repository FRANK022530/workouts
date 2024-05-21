const express = require('express');
const dotenv = require('dotenv');
const WorkOutRoutes = require('./routes/workout')
const mongoose = require('mongoose')

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json())

//mongodb connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT, () => {
        console.log("Listening on port " + PORT);
    });
    
})
.catch((error)=>{
    console.log(error)

})


app.use('/api/workouts', WorkOutRoutes)



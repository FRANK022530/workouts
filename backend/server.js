const express = require('express');
const dotenv = require('dotenv');
const WorkOutRoutes = require('./routes/workout')
const mongoose = require('mongoose')
const cors = require("cors");
dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json())

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  console.log(req.path, req.method);
  next();
});

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



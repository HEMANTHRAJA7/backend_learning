const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const workoutRoutes = require("./routes/workouts");

//middleware
app.use(express.json()); //to use req.body
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listerning for request
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db and listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

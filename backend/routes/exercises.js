// '/exercise' endpoint
// This module will handle requests made to /exercise route i.e. /exercise endpoint
// Creating RestFul APIs to do CRUD operations (via get, post) on database for '/exercise' endpoint

// We need express router for our route
const router = require('express').Router();

// Getting the mongoose model we created in models directory
let Exercise = require('../models/exercise.model'); // A promise //

// Our first route. First end point that handles incoming http get requests at root level (/) - which is /exercises/ in our context
router.route('/').get((req, res) => {
    exercise.find() // A mongoose method that fetches list of all exercises from mongoDB Atlas DB. It returns a promise
        .then(exercises => res.json(exercises)) // The Query result, the exercises from DB, will be in json format. so parse it and add to res.
        .catch(err => res.status(400).json('Error: '+ err)); // If this fails then return the error
});


// Handles incoming post requests (to the URL '/add') - which is '/exercises/add' in our context
router.route('/add').post((req,res) => {
    // Exercise will have username, description, duration, date
    const username = req.body.username; // The http request will have the details i.e. the exercise can be extracted from body
    const dscription = req.body.dscription;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({exercise}); //creating new instance of exercise, declared above, using the exercise

    // Add this exercise to DB
    newExercise.save()
        .then(() => res.json('exercise Added')) // If exercise successfully added, we expect empty response from DB and send success msg via res.
        .catch(err => res.status(400).json('Error: '+ err)); // If no response from DB, then send back the error code as response
});


module.exports = router; // Standard thing that is done for all router files.


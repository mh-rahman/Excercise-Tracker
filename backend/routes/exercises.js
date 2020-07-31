// '/exercise' endpoint
// This module will handle requests made to /exercise route i.e. /exercise endpoint
// Creating RestFul APIs to do CRUD operations (via get, post) on database for '/exercise' endpoint

// We need express router for our route
const router = require('express').Router();

// Getting the mongoose model we created in models directory
let Exercise = require('../models/exercise.model'); // A promise //

// Our first route. First end point that handles incoming http get requests at root level (/) - which is /exercises/ in our context
router.route('/').get((req, res) => {
    Exercise.find() // A mongoose method that fetches list of all exercises from mongoDB Atlas DB. It returns a promise. 
    // This is accessible since Exercise is an instance of the mongoose.schema class.
        .then(exercises => res.json(exercises)) // The Query result, the exercises from DB, will be in json format. so parse it and add to res.
        .catch(err => res.status(400).json('Error: '+ err)); // If this fails then return the error
});


// Handles incoming post requests (to the URL '/add') - which is '/exercises/add' in our context
router.route('/add').post((req,res) => {
    // Exercise will have username, description, duration, date
    const username = req.body.username; // The http request will have the details i.e. the exercise can be extracted from body
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    }); //creating new instance of exercise, declared above, using the exercise

    // Add this exercise to DB
    newExercise.save()
        .then(() => res.json('exercise Added')) // If exercise successfully added, we expect empty response from DB and send success msg via res.
        .catch(err => res.status(400).json('Error: '+ err)); // If no response from DB, then send back the error code as response
});




// Get an entry by ID
// :id is a place holder
router.route('/:id').get((req,res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise)) // If id found, return the object to json parser..
        .catch(err => res.status(400).json('Error: '+ err));
});


// Delete an entry using ID
// :id is a place holder
router.route('/:id').delete((req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise Deleted!')) // If id found, delete the object
        .catch(err => res.status(400).json('Error: '+ err));
});

// Update/modify an entry using ID
// :id is a place holder
router.route('/update/:id').post((req,res) => {
    Exercise.findById(req.params.id)
        .then(exercise => { // If id found, update the object
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json('Exercise updated successfully!'))
                .catch(err => res.status(400).json('Error'+err));
        }) 
        .catch(err => res.status(400).json('Error: '+ err));
});







module.exports = router; // Standard thing that is done for all router files.


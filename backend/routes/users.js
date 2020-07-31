// '/user' endpoint
// This module will handle requests made to /user route i.e. /user endpoint
// Creating RestFul APIs to do CRUD operations (via get, post) on database for '/user' endpoint

// We need express router for our route
const router = require('express').Router();

// Getting the mongoose model we created in models directory
let User = require('../models/user.model'); // A promise //

// Our first route. First end point that handles incoming http get requests at root level (/) - which is /users/ in our context
router.route('/').get((req, res) => {
    User.find() // A mongoose method that fetches list of all users from mongoDB Atlas DB. It returns a promise
        .then(users => res.json(users)) // The Query result, the users from DB, will be in json format. so parse it and add to res.
        .catch(err => res.status(400).json('Error: '+ err)); // If this fails then return the error
});


// Handles incoming post requests (to the URL '/add') - which is '/users/add' in our context
router.route('/add').post((req,res) => {
    const username = req.body.username; // The http request will have the details i.e. the username can be extracted from body
    const newUser = new User({username}); //creating new instance of User, declared above, using the username

    // Add this user to DB
    newUser.save()
        .then(() => res.json('User Added')) // If user successfully added, we expect empty response from DB and send success msg via res.
        .catch(err => res.status(400).json('Error: '+ err)); // If no response from DB, then send back the error code as response
});


module.exports = router; // Standard thing that is done for all router files.


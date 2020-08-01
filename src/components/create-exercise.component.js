import React, {Component} from 'react';

//import datepicker and it's styling
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateExercise extends Component{

    // Creating constructor. Also need to call the constructor of parent class
    constructor(props) {
        //constructor of parent class i.e. Components
        super(props);


        // Binding this
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // setting the initial state of component
        // state is how we create variables in react (i.e. don't declare variables using 'let'). 
        //When state is updated the page is also updated with new values.
        this.state = {
            username : "",
            description : '',
            duration : 0,
            date : new Date(),
            users : []
        }
    }


    // Get users from mongoDB but we will hardcode for now
    // componentDidMount - is a react lifecycle method that it calls before anything is displayed on page.
    componentDidMount() {
        this.setState({
            users: ['test user 1', 'test user 2'],
            username: 'test user' // default selection in the form
        });
    }

    // this func will be called when, let's say, someone enters a value in the text box on the site.
    // e =  , target = textbox
    //Need to create functions for all state variables
    onChangeUsername(e) {
        // update state when username is changed
        //always use 'set' method to update state variables
        this.setState({
            username : e.target.value
        });
    }

    onChangeDescription(e) {
        // update state when username is changed
        //always use 'set' method to update state variables
        this.setState({
            description : e.target.value
        });
    }


    onChangeDuration(e) {
        // update state when username is changed
        //always use 'set' method to update state variables
        this.setState({
            duration : e.target.value
        });
    }


    onChangeDate(date) {
        // update state when username is changed
        //always use 'set' method to update state variables
        this.setState({
            // date : e.target.value
            date : date
        });
    }

    // Function to handle submit event on the form
    onSubmit(e){
        // Prevent default HTML behavior from being triggered
        e.preventDefault();

        //variables can be created if their scope is local to functions only. Not for global stuff like state variables.
        const exercise = {
            username : this.state.username,
            description : this.state.description,
            duration : this.state.duration,
            date : this.state.date,
        };

        // Submit and commit to DB
        // Placeholder for submit code

        console.log(exercise);

        // Take user back to homepage i.e. list of exercises
        window.location = "/";
    }


    render() {
        return (
            <div>
                <p>You are in create exercise component!</p>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="UserInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user) {
                                    return <option 
                                        key={user}
                                        value={user}>{user}
                                        </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.state.onChangeDescription}
                            />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.state.onChangeDuration}
                            />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
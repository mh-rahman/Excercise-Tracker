import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component{

    // Creating constructor. Also need to call the constructor of parent class
    constructor(props) {
        //constructor of parent class i.e. Components
        super(props);


        // Binding this
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // setting the initial state of component
        // state is how we create variables in react (i.e. don't declare variables using 'let'). 
        //When state is updated the page is also updated with new values.
        this.state = {
            username : "",
        }
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


    // Function to handle submit event on the form
    onSubmit(e){
        // Prevent default HTML behavior from being triggered
        e.preventDefault();

        //variables can be created if their scope is local to functions only. Not for global stuff like state variables.
        const user = {
            username : this.state.username,
        };

        //Front-End and Back-end integration


        // Submit and commit to DB
        // Placeholder for submit code
        // console.log(user);
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))
            .catch((err) => console.log(err))
            //handle errors

        // Take user back to homepage i.e. list of exercises
        this.setState({
            username : ''
        });
    }

    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Username: </label>
                <input type="text"
                    required
                    className="form-control"
                    // placeholder='Enter the user to be added.'
                    value={this.state.username}
                    // defaultValue={this.state.description}
                    onChange={this.onChangeUsername}
                    />
            </div>
            <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary" />
            </div>
        </form>
        )
    }
}
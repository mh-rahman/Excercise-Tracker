import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Exercise = props => {
    // A functional react component
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0,10)}</td>
            <td>
                <Link to={"/edit/"+props.exercise._id}>Edit</Link> | <a href="#" onClick={() => {props.deleteExercise(props.exercise._id) }}>Delete</a>
            </td>
        </tr>
    )

}


export default class ExercisesList extends Component{
    // A react class element. Different from functional component as it has lifecycle and state methods etc.
    constructor (props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);
        
        this.state = {exercises: []};
    }


    componentDidMount() {

        axios.get('http://localhost:5000/exercises/')
            .then(res => {
                this.setState({exercises: res.data})
            })
            .catch((err) => {
                console.log(err);
            })
    }


    deleteExercise(id) {
        axios.delete('http://localhost:5000/exercises/'+id)
            .then(res => console.log(res.data))

        this.setState({
            //when we set state, react refreshes the page automatically with new state
            //el = element
            exercises: this.state.exercises.filter(el => el._id != id)
        })
    }

    exerciseList() {
        return this.state.exercises.map(currExercise => {
            return <Exercise exercise={currExercise} deleteExercise={this.deleteExercise} key={currExercise._id} />;
        });
    }

    render() {
        return (
            // Home page of our app
            <div>
                <h3>Exercise Logs</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*Call the ExercisesList method that returns the rows of the table */}
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
import React, {Component} from 'react';
// {} allow us to import and use something without having to use its namespace
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            // The code below is a modified nav code from bootstrap site. Modified to work with react: 'Link' instead of 'a' tag, 'className' instead of 'class' tag etc.

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                {/* <div className="collapse navbar-collapse"></div> */}
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Exercise Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

import React, {Component} from 'react';
import {Link} from 'react-router-dom'

//import UserCard from './components/User';

export default class Home extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
                <Link to="/userlist">Show User List</Link>
            </div>
        )
    }

}

import { connect } from 'react-redux';
import React , { Component } from 'react';
import UserList from './UserList'
import Home from '../Home'
import {asyncAction} from '../actions'
import UserInfo from './UserInfo'
import { BrowserRouter as Router, Link , Route , Redirect } from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount(){
        this.props.dispatch(asyncAction());
    }


    render(){
       return(
            <Router>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route path="/userlist" render={props => <UserList {...props} props = {this.props} /> }/>
                    <Route path="/userinfo/:name" component={UserInfo}/>

                </div>
            </Router>
        )
    }
}

const AppContainer = connect(state => state)(App);
export default AppContainer;






// {(props) => (<UserList user={this.props} {...props} />)}
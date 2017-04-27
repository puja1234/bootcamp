import { connect } from 'react-redux';
import React , { Component } from 'react';
import UserList from './UserList'
import Home from '../Home'
import UserInfo from './UserInfo'
import { BrowserRouter as Router, Link , Route , Redirect } from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        console.log(this.props)
       return(
            <Router>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route path="/userlist" component={UserList}/>
                    <Route path="/userinfo/:name" component={UserInfo}/>

                </div>
            </Router>
        )
    }
}

const AppContainer = connect(state => state)(App);
export default AppContainer;






// {(props) => (<UserList user={this.props} {...props} />)}
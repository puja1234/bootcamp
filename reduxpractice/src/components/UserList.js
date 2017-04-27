import React , { Component } from 'react';
import { connect } from 'react-redux';
import {asyncAction} from '../actions'
import {  Link } from 'react-router-dom'
class UserList extends Component{

    componentWillMount(){
        this.props.dispatch(asyncAction());
    }

    render(){
        const list = this.props;
        console.log(list);
        return (
            <div>
                {
                    (list.loading) ?
                        <p>user List loading</p>:
                        (list.users.length)?
                            <ul>{
                                list.users.map((items)=>(
                                    <li key={items._id}>
                                        {<Link to={`/userinfo/${items.userName}`}>{items.userName}</Link>}
                                    </li>))
                            }
                            </ul>:
                            <p>no users</p>

                }

            </div>

        )
    }

}
const UserListContainer = connect(state => state)(UserList);
export default UserListContainer;

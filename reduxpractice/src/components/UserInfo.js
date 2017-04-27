import React , { Component } from 'react';
import { connect } from 'react-redux';
import {asyncActionDelete,asyncActionUpdate} from '../actions'

class UserInfo extends React.Component{
   constructor(props){
       super(props)
   }
   onClickHandler = () =>{
       console.log(this.props)
       this.props.dispatch(asyncActionDelete(this.props.match.params.name))
      this.props.history.push('/')

   }
    render(){
        const list = this.props.users;

        return(
            <div>
                <table>
                    <tr>
                        <td>
                            <ul>{
                                list.map((user)=>{
                                    var username =user.userName;
                                    var paramname=this.props.match.params.name;
                                    {if(username==paramname){
                                        return (<p key={user._id}>{user.email}</p>)
                                    }}
                                })
                            }</ul>
                        </td>
                        <td><button onClick={this.onClickHandler.bind(this)}>Delete</button></td>
                        <td><button onClick={this.props.dispatch(asyncActionUpdate(this.props.match.params.name))}>Edit </button></td>
                    </tr>
                </table>
            </div>
        )
    }


}

const UserInfoContainer=connect(state=>state)(UserInfo)
export default UserInfoContainer
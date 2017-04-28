import React , { Component } from 'react';
import { connect } from 'react-redux';
import {asyncActionDelete,asyncActionUpdate} from '../actions'
import UpdateComponent from './UpdateComponent'

class UserInfo extends React.Component{
   constructor(props){
       super(props);
       this.state={

       }
   }
   onClickHandler = () =>{
       console.log(this.props)
       this.props.dispatch(asyncActionDelete(this.props.match.params.name))
      this.props.history.push('/')

   }

   onUpdateHandler = () =>{
       //set edit property true

       this.props.dispatch(asyncActionUpdate(this.props.match.params.name))
       this.props.history.push('/')
   }
    render(){
        const list = this.props.users;
        var paramname=this.props.match.params.name;
        return(
            <div>
                <table>
                    {
                        this.state.edit?
                            <UpdateComponent  paramName = {paramname} props={this.props}/>
                            :
                            <tr>
                                <td>
                                    <ul>{
                                        list.map((user)=>{
                                            var username =user.userName;

                                            {if(username==paramname){
                                                return (<p key={user._id}>{user.email}</p>)
                                            }}
                                        })
                                    }</ul>
                                </td>
                                <td><button onClick={this.onClickHandler.bind(this)}>Delete</button></td>
                                <td><button onClick={(e)=>{this.setState({edit:!this.state.edit})}}> Edit </button></td>

                            </tr>
                    }

                </table>
            </div>
        )
    }


}

const UserInfoContainer=connect(state=>state)(UserInfo)
export default UserInfoContainer
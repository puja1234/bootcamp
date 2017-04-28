import React , { Component } from 'react';
import { connect } from 'react-redux';
import {asyncActionUpdate} from '../actions'

export class UpdateComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            uData:this.props.userDetail
        }
    }

    onUpdateHandler = () =>{
        if(this.state.email == null){
              alert("Email cannot be null")
        }else {
            this.props.dispatch(asyncActionUpdate(this.props.match.params.name))
            this.props.history.push('/');
        }
        }

 /*   onChangeHAndler = (event) => {
        let {uData} = this.state;
        this.setState(
            uData.email: event.target.value
        )
    }*/

    render(){
        let {uData} = this.state;
        console.log(uData,">>>>>>>>>>>>")

        return(
            <div>
                <input type="text"
                       value={this.state.uData.email}
                       onChange={this.onChangeHandler.bind(this)}

                />
                <button onClick={this.onUpdateHandler.bind(this)}>Save</button>
            </div>
        )
    }

}

const UserInfoContainer=connect(state=>state)(UserInfo)
export default UserInfoContainer
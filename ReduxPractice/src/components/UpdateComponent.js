import React , { Component } from 'react';
import { connect } from 'react-redux';
import {asyncActionUpdate} from '../actions'

export class UpdateComponent extends React.Component {
    /*constructor(props) {
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

 /!*   onChangeHAndler = (event) => {
        let {uData} = this.state;
        this.setState(
            uData.email: event.target.value
        )
    }*!/

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
    }*/

    constructor(props){
        super(props);
        this.state = {
            udata:{

            }
        }
    }

    componentWillMount(){
        const userList = this.props.users;

        userList.map((item)=>{
            if(item.userName == this.props.paramName ){
                this.setState({
                    udata:item
                })
            }
        })
    }

    clickHandler = () =>{
        // console.log(this.props.props)
        if(this.state.udata.email == null){
            alert("Email cannot be null")
        }else {
            this.props.props.dispatch(asyncActionUpdate(this.state.udata))
            this.props.props.history.push('/');

        }
    }
    changeHandler = (e) => {
        var newData={
            userName:this.props.paramName,
            email:e.target.value
        }
        console.log(newData.email);
        this.setState({
            udata:newData
        })
    }

    render(){
let {udata} = this.state;
        return(
            <div>
                <input type="text"
                       value={udata.email}
                       onChange={this.changeHandler.bind(this)}
                />
                <button onClick={this.clickHandler.bind(this)}>Save</button>
                {udata.userName} - {udata.email}
            </div>
        )
    }

}


const UpdateComponentContainer=connect(state=>state)(UpdateComponent)
export default UpdateComponentContainer
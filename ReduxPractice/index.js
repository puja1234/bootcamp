/*
//https://github.com/manoj-nama/react-webpack-basic

console.log("This is React");


import { createStore , combineReducers , applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';
import fetch from 'isomorphic-fetch';

/!*const reducer = (state={a:10 , counter : 0},action) => {
    switch (action.type){
        case 'INC' :{
            return {
                    ...state , counter:state.counter +action.val
        }
        }
        case 'DEC' : {
            return {
                    ...state , counter:state.counter -action.val
        }
        }

    }
    return state;
}

const reducerTwo = (state=10,action) => {
    switch (action.type){
        case 'INC' :{
            return state + action.val
        }
        case 'DEC' : {
            return state - action.val
        }

    }
    return state;
}

var logger = (store) => (next) => (action) => {
    console.log("First middleware");
    next(action);
}

var middlewares = applyMiddleware(logger);

var reducers = combineReducers({
    state1:reducer,
    state2:reducerTwo
})

var store = createStore(reducers,middlewares);

store.subscribe(() => {
    console.log(store.getState());
});

function increment(val) {
    return {type : 'INC' , val};
}

function decrement(val) {
    return {type: 'DEC' , val};
}
store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(decrement(1));
store.dispatch(decrement(1));
store.dispatch(decrement(1));
store.dispatch(decrement(1));*!/


// const product = (state,action) => { // reducers specify how the application's state changes in response.
//     switch(action.type){
//         case 'INC' :{
//             state.inventory +=1;
//             return state;
//         }
//         case 'DEC' :{
//             return {
//                 ...state , inventory : state.inventory - 1
//             }
//         }
//     }
//     return state;
// }
//
// var store = createStore(product,{inventory:100}); /!*Holds application state;
//                                                     Allows access to state via getState();
//                                                     Allows state to be updated via dispatch(action);
//                                                     Registers listeners via subscribe(listener);
//                                                     Handles unregistering of listeners via the function returned by subscribe(listener).*!/
//
//
// store.subscribe(() => {
//     console.log(store.getState());
// });
//
// function increment() {
//     return {type:'INC'};
// }
//
// function decrement() {
//     return {type:'DEC'}; // this is action that send data from your application to your store
// }

// store.dispatch(increment());//increment are action creators
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
const initialState = {
    users : [],
    loading:false,
    err:null
}

const userFetch =(state=initialState,action) => {
    switch (action.type){
        case 'Fetch_user_started':{
          return{
              ...state ,
              loading:true
          }
        }
        case 'Fetch_user_Success':{
          const usersNew=state.users.concat(action.user)
            return{
                ...state,
                loading : false,
                users:usersNew
            }
        }
        case 'Fetch_user_Failed':{
            return {
                ...state,
                loading : false,
                err: action.err
            }
        }
    }
    return state;
}

const middlewares = applyMiddleware(thunkMiddleware);

var store = createStore(userFetch,middlewares);

function apiCallStarted() {
    return {type:'Fetch_user_started'}; // this is action that send data from your application to your store
}

/!*store.subscribe(() => {
    console.log(store.getState());
});*!/

function apiCallSuccess(user) {
    return {type:'Fetch_user_Success', user}; // this is action that send data from your application to your store
}

function apiCallFailed(err) {
    return {type:'Fetch_user_Failed',err}; // this is action that send data from your application to your store
}

const asyncAction = () => {
    return (dispatch) => { // this is store's dispatch method
        dispatch(apiCallStarted()); // call started
        fetch('http://rest.learncode.academy/api/manoj/users')
            .then(response => response.json())
            .then(data => {
                dispatch(apiCallSuccess(data)); 	// success
            })
            .catch(err => {
                dispatch(apiCallFailed(err));		// failure
            });
    }
};
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(asyncAction());*/

// import { store } from './src/store'
// import {asyncAction} from './src/actions'
//
// store.subscribe(() => {
//     console.log(store.getState());
// });
//
// store.dispatch(asyncAction());

import store  from './src/store'
import { render } from 'react-dom';
import React,{Component} from 'react'
import { Provider } from 'react-redux'


import  {BrowserRouter as Router, Route, RouteHandler } from 'react-router-dom'
import App from './src/components/App'

render(
             <Provider store={store}>
                 <App/>
             </Provider>,
            document.getElementById('app')
        );



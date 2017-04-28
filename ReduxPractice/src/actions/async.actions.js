import {
    apiCallStarted,
    apiCallSuccess,
    apiCallFailed,
    apiCallDeleteStarted,
    apiCallDeleteSuccess,
    apiCallDeleteFailed,
    apiCallUpdateStarted,
    apiCallUpdateSuccess,
    apiCallUpdateFailed
}from './app.actions'

import fetch from 'isomorphic-fetch';

export const asyncAction = () => {
    return (dispatch) => { // this is store's dispatch method
        dispatch(apiCallStarted()); // call started
        fetch('http://localhost:3200/User')
            .then(response => response.json())
            .then(data => {
                dispatch(apiCallSuccess(data)); 	// success
            })
            .catch(err => {
                dispatch(apiCallFailed(err));		// failure
            });
    }
};

export const asyncActionDelete = (name) => {
    console.log('async action callled ----',name)
    return (dispatch) => { // this is store's dispatch method
        dispatch(apiCallDeleteStarted()); // call started
        fetch('http://localhost:3200/User', {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName:name
            }),
        })
            .then(response => response.json())
            .then(data => {
                dispatch(apiCallDeleteSuccess(data)); 	// success
            })
            .catch(err => {
                dispatch(apiCallDeleteFailed(err));		// failure
            });
    }
};

export const asyncActionUpdate = (newData) => {
    return (dispatch) => { // this is store's dispatch method
        dispatch(apiCallUpdateStarted()); // call started
        fetch('http://localhost:3200/User', {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
            .then(response => response.json())
            .then(data => {
                dispatch(apiCallUpdateSuccess(data)); 	// success
            })
            .catch(err => {
                dispatch(apiCallUpdateFailed(err));		// failure
            });
    }
};


/*
export const updateAsyncAction = () => {
    return dispatch => {
        dispatch(started());
        fetch("http://localhost/3000")
            .then(response => response.json())
            .then(data => {
                dispatch(updated(data));
            })
            .catch(err => {
                dispatch(failed(err));
            });
    }
};*/

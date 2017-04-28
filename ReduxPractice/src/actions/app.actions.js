import {
    FETCH_USER_STARTED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    DELETE_USER_STARTED,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILED,
    UPDATE_USER_STARTED,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED
} from './../config/config.constants'

export function apiCallStarted() {
    return {type:FETCH_USER_STARTED}; // this is action that send data from your application to your store
}

export function apiCallDeleteStarted() {
    return {type:DELETE_USER_STARTED}; // this is action that send data from your application to your store
}

export function apiCallUpdateStarted() {
    return {type:UPDATE_USER_STARTED}; // this is action that send data from your application to your store
}





export function apiCallSuccess(user) {
    return {type:FETCH_USER_SUCCESS, user}; // this is action that send data from your application to your store
}

export function apiCallDeleteSuccess(user) {
    return {type:DELETE_USER_SUCCESS,user}; // this is action that send data from your application to your store
}

export function apiCallUpdateSuccess(user) {
    return {type:UPDATE_USER_SUCCESS,user}; // this is action that send data from your application to your store
}






export function apiCallFailed(err) {
    return {type:FETCH_USER_FAILED,err}; // this is action that send data from your application to your store
}

export function apiCallDeleteFailed(err) {
    return {type:DELETE_USER_FAILED,err}; // this is action that send data from your application to your store
}

export function apiCallUpdateFailed(err) {
    return {type:UPDATE_USER_FAILED,err}; // this is action that send data from your application to your store
}

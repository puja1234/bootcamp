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

const initialState = {
    users : [],
    loading:false,
    err:null
}

export const userFetch =(state=initialState,action) => {
    switch (action.type){
        case FETCH_USER_STARTED:{
            return{
                ...state ,
                loading:true
            }
        }
        case FETCH_USER_SUCCESS:{
            const usersNew=state.users.concat(action.user)
            return{
                ...state,
                loading : false,
                users:usersNew
            }
        }
        case FETCH_USER_FAILED:{
            return {
                ...state,
                loading : false,
                err: action.err
            }
        }
    }
    return state;
}


export const userdelete =(state=initialState,action) => {
    switch (action.type){
        case DELETE_USER_STARTED:{
            return{
                ...state ,
                loading:true
            }
        }
        case DELETE_USER_SUCCESS:{
            const usersNew=action.user
            console.log(usersNew)
            return{
                ...state,
                users:usersNew,
                loading : false,
            }
        }
        case DELETE_USER_FAILED:{
            return {
                ...state,
                loading : false,
                err: action.err
            }
        }
    }
    return state;
}


export const userUpdate =(state=initialState,action) => {
    switch (action.type){
        case UPDATE_USER_STARTED:{
            return{
                ...state ,
                loading:true
            }
        }
        case UPDATE_USER_SUCCESS:{
            const usersNew=state.users.concat(action.user)
            return{
                ...state,
                loading : false,
                users:usersNew
            }
        }
        case UPDATE_USER_FAILED:{
            return {
                ...state,
                loading : false,
                err: action.err
            }
        }
    }
    return state;
}
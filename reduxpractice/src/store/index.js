import {createStore,applyMiddleware} from 'redux'
import {middleware} from './../middleware'
import {userFetch} from './../reducers'

const middlewares = applyMiddleware(...middleware);


const store = createStore(userFetch,middlewares);

export default store;
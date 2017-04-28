import {logger} from './logger'
import thunkMiddleware from 'redux-thunk'

export const middleware = [
    logger,
    thunkMiddleware
]
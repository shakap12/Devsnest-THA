import {combineReducers} from 'redux'
import cReducer from './reducer'

const rootReducer =combineReducers({
    inputChange:cReducer,
})

export default rootReducer
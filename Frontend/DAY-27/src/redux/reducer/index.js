import {combineReducers} from 'redux'
import inputReducer from './inputReducer'

const rootReducer = combineReducers({
    todo: inputReducer,
})

export default rootReducer;
import { combineReducers } from 'redux'
import routerJump from './routerJump'
// import asyncComponent from './asyncComponent';
import { routerReducer } from 'react-router-redux'
export default combineReducers({
    routerJump, routing: routerReducer
})
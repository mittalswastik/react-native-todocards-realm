import {combineReducers} from 'redux';
import { types } from '../action/index.js';

let initstate = {
	username : "",
	password : null,
}

let loginReducer = (state = initstate, action) => {
	switch(action.type){
		case types.LOGIN :
			return {
				...state,
				username : action.payload.name,
				password : action.payload.password
			}

		default : 
			return {
				...state,
				username : "test",
				password : 1
			}
	}
}

let cards = [];

let cardReducer = (state = cards, action) => {
	switch(action.type){
		case types.ADDSTORE :
			return {
				...state,
				action.payload
			}

		case types.DELETESTORE :
			return {
				...state,
				action.payload
			}
			
		case types.DISPLAYSTORE :
			return {
				...state,
				action.payload
			}
			
		case types.DELETEALL :
			return {
				...state,
				cards : []
				
			}			

		default :
			return {
				...state,
				cards : []
			}	
			
	}
}

const rootReducer = combineReducers({
						loginState : loginReducer,
						cardState : cardReducer
					});

export default rootReducer;
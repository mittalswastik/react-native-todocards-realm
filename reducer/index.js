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

let start = {
	count : null,
	cards : []
};

let cardReducer = (state = start, action) => {
	switch(action.type){
		case types.UPDATESTORE :
			return {
				...state,
				count : action.payload.count,
				cards : action.payload.cards
			}

		default :
			return {
				...state,
				count : null,
				cards : []
			}	
			
	}
}

/*const cardinit = {};

let cardReducer = (state = cardinit, action) => {
	switch(action.type) {
		case types.CARDUPDATE :
			return {
				...state,
				action.payload.data
			}

		// one case of delete action, return is same
		
		// as all return are same hence I guess no case and default case only can do the trick	
	}
}*/

const rootReducer = combineReducers({
						loginState : loginReducer,
						cardState : cardReducer
					});

export default rootReducer;
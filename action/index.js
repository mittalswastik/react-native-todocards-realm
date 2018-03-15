import { setAsyncStore , removeAsyncStoreKey } from '../utils';

export const types = {
	LOGIN:'LOGIN',
	SIGNUP:'SIGNUP',
	UPDATESTORE:'UPDATESTORE'
}

export function login(username, password) {
	let data = {
		name : username,
		password : password
	};

	//** pick this username and password data and verify user and then send action to update card display info

	// send data to api and verify if password incorrect return different payload and if no user return different payload

	return {
		type : types.LOGIN,
		payload : data
	}
}

export function signup(username, password) {
	// for new user different action
    
    let data = {
    	name : username,
    	password : password
    };

    // send request to api then execute the action and in component display successfully registered and then direct to login page
}

export function updateStorage(values){ // here key is the position of card in card array
	

	removeAsyncStoreKey('cards');
	setAsyncStore('cards' , values);

	//let data = asyncstorage info 

	//access asynstorage here and delete key position card object compelete info and update storage

	return {
		type : types.UPDATESTORE,
		payload : values // no payload required
	}

}
/*
other function would be cardupdate for add and display both. no key required so one action does both
	function action(choice) // here if choice is a then add and if d then display

	// here it can be a case where async storage empt then send no info and in case add create storage key value
*/

/*export function addCard(){
	

	return {
		type : types.ADDCARD,
		payload : null // no payload required
	}
}*/


const Realm = require('realm');
import { CardsSchema } from '../constant';

export const types = {
	LOGIN:'LOGIN',
	SIGNUP:'SIGNUP',
	ADDSTORE:'UPDATESTORE',
	DELETESTORE: 'DELETESTORE',
	DISPLAYSTORE: 'DISPLAYSTORE',
	DELETEALL: 'DELETEALL'
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

export function deleteAll(){
	Realm.open({schema : [ CardsSchema ]})
		.then(realm => {
			realm.write(()=> {
				let allcards = realm.objects('todo'); 
  				realm.delete(allcards);
			});
		}

	return {
		type : types.DELETEALL,
		payload : null
	}
}

export function deleteStorage(key){ // here key is the position of card in card array

	Realm.open({schema : [ CardsSchema ]})
		.then(realm => {
			realm.write(()=> {
				let allcards = realm.objects('todo'); // apply filter here, this will delete all
  				realm.delete(allcards); // Deletes all
			});

			const carddetails = realm.objects('todo');
  			let values = Array.from(carddetails);

		}

	return {
		type : types.DELETESTORE,
		payload : values
	}

}

export function addStorage(title , content){
	Realm.open({schema : [ CardsSchema ]})
		.then(realm => {
			realm.write(()=> {
				const task = Realm.create('todo', {
					title : title,
					content : content
				});
			});

			const carddetails = realm.objects('todo');
  			let values = Array.from(carddetails);
		}

	return {
		type : types.ADDSTORE,
		payload : values // no payload required
	}	
}

export function displayStore(){
	Realm.open({schema : [ CardsSchema ]})
		.then(realm => {

				const carddetails = realm.objects('todo');
  				let values = Array.from(carddetails);

			} catch(e) {
				let values = [];
			}
		}

	return {
		type : types.DISPLAYSTORE,
		payload : values
	}	
}


/*Realm.open({schema : [ CardsSchema ]})
  			.then(realm => {
  				realm.write(()=> {
  					const task = realm.create('todo', {
  						title : "title2",
  						content : "content2"
  					});
  				});
  				const carddetails = realm.objects('todo');
  				let values = Array.from(carddetails);
  			}).catch(error => {

  				Realm.write(()=> {
  					const task = Realm.create('todo', {
  						title : "title1",
  						content : "content1"
  					});
  				});

  				console.log(error);
  			});*/
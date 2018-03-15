import { AsyncStorage } from 'react-native';  

export const getAsyncStore = async (key) => {
	let object = await AsyncStorage.getItem(key);
	}/*.reject(() => {

	
	}).finally(() => {

	})*/

	return object;
}

export const setAsyncStore = (key,object) => {
	AsyncStorage.setItem(key,object);
}

export const removeAsyncStoreKey = (key) => {
	AsyncStorage.removeItem(key);
}
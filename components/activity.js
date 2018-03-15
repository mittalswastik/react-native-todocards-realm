import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Text,
  TextInput,
  View,
  Button,
  ScrollView
} from 'react-native';
import { updateStorage } from '../action/index.js';
import Task from './cards/card';


class Activity extends Component {
	constructor(props){
		super(props);
		/*this.state = {
			numer : this.props.n, // to be returned by the reducer
			obj : this.props.obj 
		}*/

		this.state = {
			obj : this.props.object
		}
		//setstate
		this.deletecards = this.deletecards.bind(this);
		this.addcards = this.addcards.bind(this);
		this.setCard = this.setCard.bind(this);
		this.retrieveStorage = this.retrieveStorage.bind(this);
	}

	retrieveStorage(act,key) {
	  	
  		let value = this.state.obj;
  		let cnt = 0;
  		let cardsarray = [];
  		let newobj = {};
  		
		if(value != null) {
			switch(act){
				case "d" :  cnt = value.count - 1;
							cardsarray = [...value.cards].splice(key-1,1);
							newobj = {
								count : cnt,
								cards : cardsarray
							}
							this.props.updateStorage(newobj);

						break;

				case "a" :  cnt = value.count + 1;
							cardsarray = [...value.cards];
							let object = {
								title : "test",
								content : "testing"
							}

							cardsarray.push(object);
							newobj = {
								count : cnt,
								cards : cardsarray
							}
							this.props.updateStorage(newobj);

						break;	
				
				default : console.log("not needed");		
			}
		} else {
			console.log("not working");
			console.log(value);
		}
    }

	deletecards(key) {
		// delete card action
		this.retrieveStorage("d",key);

	}

	addcards() {

		 this.retrieveStorage("a",null);
	}

	setCard() {

		let cardds = [];

		console.log("--------------------------------------------------");
		console.log(this.state.obj);
		console.log(this.state.obj.count);

		if(Object.keys(this.state.obj) != 0) {
			cardds = Object.keys(this.state.obj).map((x,index) => {
				return <Task i={index} del={this.deletecards} />
			})
		} else {
			cardds.push(<Text> wait... </Text>);
		}


		return cardds;
	}


	render() {


		const card = this.setCard();

		return (
			<View style={{flex : 1}}>
				<ScrollView>
					{card}
				</ScrollView>
				<Button title="add card" onPress={this.addcards}/>
			</View>	
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		updateStorage
	} , dispatch)
}

export default connect(null , mapDispatchToProps)(Activity);
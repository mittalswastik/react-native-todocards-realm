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
import { addStorage , deleteStorage , deleteAll , displayStorage } from '../action/index.js';
import Task from './cards/card';
import { Realm } from 'realm';


class Activity extends Component {
	constructor(props){
		super(props);

		this.state = {
			values : []
		}
		
		this.deletecards = this.deletecards.bind(this);
		this.addcards = this.addcards.bind(this);
		this.setCard = this.setCard.bind(this);
		this.retrieveStorage = this.retrieveStorage.bind(this);
	}

	componentWillMount(){
		this.props.displayStorage();
	}

	componentWillReceiveProps(nextProps) {
		this.props.displayStorage();
		this.setState({
			values : nextProps.cardState.cardState
		})
	}

	retrieveStorage(act,key) {
  		
		switch(act){
			case "d" : 
						this.props.deleteStorage(key);

					break;

			case "a" :  
						this.props.addStorage("temp. title", "temp. content");

					break;	
			
			default : console.log("not needed");	
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

		if(this.state.values.length != 0) {
			cardds = this.state.values.map((x,index) => {
				return <Task data={x} i={index} del={this.deletecards} />
			})
		} else {
			return null;
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
				<Button title="delete all" onPress={this.props.deleteAll()} >
			</View>	
		);
	}
}

function mapStateToProps(cardState){
	return {
		cardState
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		addStorage,
		deleteStorage,
		displayStorage,
		deleteAll
	} , dispatch)
}

export default connect(mapStateToProps , mapDispatchToProps)(Activity);
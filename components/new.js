import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import t from 'tcomb-form-native';
import { Actions } from 'react-native-router-flux';
import {
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
import { login } from '../action/index.js';
import { getAsyncStore , setAsyncStore } from '../utils';

const styles = {
	viewStyle : {
		borderStyle : 'solid',
		//borderColor : 'black'
		flexDirection : 'column',
		justifyContent : 'flex-start'
	},

	header : {
		flexDirection : 'column',
		justifyContent : 'flex-start',
		alignItems : 'center'
	},

	textStyle : {
		fontSize : 50,
		color : 'red',
	},

	buttonStyle : {
		color : 'red'
	},

	content : {
		flexDirection : 'column',
		justifyContent : 'space-between'
	}
}


const Form = t.form.Form;

const user = t.struct({
	username : t.String,
	password : t.String
});

class New extends Component{
  constructor(props){
  	super(props);
  	this.state = {
  		name : '',
  		password : null
  	}
  	this.handleLogin = this.handleLogin.bind(this);
  //	this.setStorage = this.setStorage.bind(this);
  	//this.FunctionToOpenSecondActivity = this.FunctionToOpenSecondActivity.bind(this);
  }

  componentWillReceiveProps(nextProps) {
  	//console.error("checking");
  	this.setState({
  		name : nextProps.loginState.loginState.username,
  		password : nextProps.loginState.loginState.password
  	})
  }

  handleLogin(){
  	// submit the values here
  	let data = this.refs.form.getValue();

  	this.props.login(data.username , data.password);
  
  }
  

  /*setStorage = async () => {
  	
  	try {

  		let value = await AsyncStorage.getItem('cards');

  		console.log(value);

  		if( value == null) {
  			
  			let obj = {
  					count: 3,
  					cards: [
	  					{
	  						title : "test1",
	  						content : "content1"
	  					},

	  					{
	  						title : "test2",
	  						content : "content2"	
	  					},

	  					{
	  						title : "test3",
	  						content : "content3"
	  					}
  					]
  				};


  			AsyncStorage.setItem('cards',JSON.stringify(obj)).then(()=>{
  				console.log("setting up asycn storage");
  			});

  			Actions.activity({test:"testing"});

  		}

  	} catch(e) {
  		console.log("error");

  	}
  }*/

  render() {

  	if(this.state.password != null) {
  		//navigate to next activity

  		//this.setStorage();

  		let value = getAsyncStore('cards');

  		if( value == null) {
  			
  			let obj = {
  					count: 3,
  					cards: [
	  					{
	  						title : "test1",
	  						content : "content1"
	  					},

	  					{
	  						title : "test2",
	  						content : "content2"	
	  					},

	  					{
	  						title : "test3",
	  						content : "content3"
	  					}
  					]
  				};


  			setAsyncStore('cards' , obj);

  			value = obj;

  		} else {
  			value = JSON.parse(value);
  		}

  		Actions.activity({ object : value });
  	/*	let value = AsyncStorage.getItem('cards').then((values) => {
  			return values;
  		});

  		console.log(value);

  		if( value == null) {
  			
  			let obj = {
  					count: 3,
  					cards: [
	  					{
	  						title : "test1",
	  						content : "content1"
	  					},

	  					{
	  						title : "test2",
	  						content : "content2"	
	  					},

	  					{
	  						title : "test3",
	  						content : "content3"
	  					}
  					]
  				};


  			AsyncStorage.setItem('cards',JSON.stringify(obj)).then(()=>{
  				console.log("setting up asycn storage");
  			});
  		} */
  	}

    return (
	    		<View style={styles.viewStyle}>
	    			<View style={styles.header}>
	    				<Text style={styles.textStyle}>TODO APP</Text>
	    			</View>

	    			<View style={styles.content}>
				  		<Form type={user} 
				  			ref={"form"}
				  		/>
				  		<Button
				  			title="Login"
				  			onPress={this.handleLogin}
				  			color="red"
				  		/>
			  		</View>	  		
		  		</View>
    );
  }
}

function mapStateToProps(loginState,cardState){
	return {
		loginState, 
		cardState
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		login
	}, dispatch)
} 

export default connect(mapStateToProps , mapDispatchToProps)(New);
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
const Realm = require('realm');
import { CardsSchema } from '../constant';

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

  render() {


  	if(this.state.password != null) {
  		
  		Actions.activity();

  	
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

function mapStateToProps(loginState){
	return {
		loginState
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		login
	}, dispatch)
} 

export default connect(mapStateToProps , mapDispatchToProps)(New);
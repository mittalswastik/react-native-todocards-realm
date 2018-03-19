import React , {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	Text,
	TextInput,
	View,
	Button
} from 'react-native';

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

class Task extends Component {
	constructor(props){
		super(props);
	}	

	render(){
		return (
			<Card>
				<CardTitle>
					<Text>{this.props.data.title}</Text>
				</CardTitle>
				<CardContent>
					<Text>{this.props.data.content}</Text>
				</CardContent>
				<CardAction>
					<Button title="delete" onPress={this.props.del(this.props.i)}/>
				</CardAction>
			</Card>
		);
	}
}

export default Task;
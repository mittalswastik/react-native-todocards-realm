import React from 'react';
import { Scene , Router } from 'react-native-router-flux';
import New from './components/new';
import Activity from './components/activity';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene key="login" component={New} title="LogIn" initial/>
				<Scene key="activity" component={Activity} title="Activity"/>
			</Scene>
		</Router>	
	)
} 

export default RouterComponent;
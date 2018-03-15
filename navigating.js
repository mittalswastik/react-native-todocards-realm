//using react router instead.. no use of this file


import App from './App';
import New from './components/new';
import Activity from './components/activity';

const navigate = StackNavigator({
		Screen1 : {
			screen : App,
		},

		Screen2 : {
			screen : New,
		},

		Screen3 : {
			screen : Activity,
		}
	},
	
	{
		initialRouteName : 'Screen1'
	}
);

export default navigate;
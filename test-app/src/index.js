import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './App';

class MainController extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			loggedIn: false
		}
	}

	render() {
		return (
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<MainController/>, document.getElementById('root'));

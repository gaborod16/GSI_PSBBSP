import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Template from './plain-template';
import Login from './loginForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Template/>, document.getElementById('root'));
ReactDOM.render(<Login/>, document.getElementById('content'));

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, useLocation} from 'react-router-dom';


import './index.css';
import App from './App';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactRouter from './Router/router';
import {BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Router> 
    <ReactRouter/> 
        </Router> 
    ,document.getElementById('root'));
registerServiceWorker();
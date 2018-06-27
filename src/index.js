import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';


const apiLinks = [
	'https://computer-store-service.herokuapp.com/books',
	'https://computer-store-service.herokuapp.com/books/:book_id',
	'https://computer-store-service.herokuapp.com/books/:authorName/:price'
]

ReactDOM.render(<App apiLinks={apiLinks}/>, document.getElementById('root'));
registerServiceWorker();

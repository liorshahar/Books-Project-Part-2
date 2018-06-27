import React, { Component } from 'react'
import BookList from './BookList';

class App extends Component {
	constructor(props){
		super(props);
		this.state ={ 
			isLoading: false
			
		}

	}	

	getMoviesFromApiAsync() {
  		return fetch('https://computer-store-service.herokuapp.com/books')
    	.then((response) => response.json())
    	.then((responseJson) => {
    		console.log(responseJson.books)
      		 this.setState({
          		isLoading: true,
         		dataSource: responseJson.books
        	})
		}).catch((error) => {console.error(error)});
	}	

	render(){

		if(!this.state.isLoading){
			this.getMoviesFromApiAsync();
			console.log(this.dataSource);
		}
		return (
			<div>
				<div className="appLinks">
					<h1>Books Project Part 2</h1>
					<ul>
						<li><button className="linkBtn">Get all books</button></li>
						<li>
							<button className="linkBtn">Get book by id</button>
							<form>
								 <label>ID:
								    <input type="text" ref={input=> this.getBookById = input} />
								 </label>
							</form>
						</li>
						<li><button className="linkBtn">Get book by author name and price</button></li>
					</ul>
				</div>
				<div className="apiContent">
					<BookList/>
				</div>
			</div>
		)
	}
}

export default App
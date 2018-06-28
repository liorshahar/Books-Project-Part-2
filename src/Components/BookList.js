import React, { Component } from 'react'
import Book from './Book';

class BookList extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			books: []
		}
		
	}



	
	componentWillMount(){
		var self = this;
		self.fetchData();
	}

	fetchData(){
		fetch('https://computer-store-service.herokuapp.com/books')
      	.then((response) => response.json())
      	.then(parserdJSON => parserdJSON.books.map(book =>(
  			{
  				name: 		book.name,
				id: 		book._id,
				price: 		book.price,
				authorName: book.author.name,
				awards: 	book.author.awards 
  			}
		)))
		.then(books => this.setState({
			books,
			isLoading: false
		}))
      	.catch((error) =>{console.error(error)});
  	}	

  	

	eachBook(book , i){
		return(
			<Book book={book} key={i} index={'book' + i}>
				
			</Book>
		)
	}

	render(){

	return(

		<div className="bookList">
			<h4>Get All Books</h4>
			{this.state.books.map(this.eachBook)}
		</div>
		)
	}
}

export default BookList
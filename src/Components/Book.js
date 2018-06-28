import React, { Component } from 'react'


class Book extends Component {
	constructor(props){
	   super(props);
			
	   this.renderBook = this.renderBook.bind(this);
       this.renderBookNoTFound = this.renderBookNoTFound.bind(this);
    }


	
    renderBook(){
        return(
              <div className="bookItem">
                <p>Book Name: {this.props.book.name}</p>
                <p>Book Id: {this.props.book.id}</p>
                <p>Book Price:{this.props.book.price}</p>
                <p>Author Name: {this.props.book.authorName}</p>
                <p>Book Awards: {this.props.book.awards}</p>
            </div>
        )
    }

    renderBookNoTFound(){
        return (<div>Book Not Found</div>)
    }

	render(){
        return(
            this.props.book ? this.renderBook() : this.renderBookNoTFound()	
        )
	}
}

export default Book
import React, { Component } from 'react'
import Book from './Book';


class BookByNameAndPrice extends Component {
    constructor(props){
        super(props);
        this.state = {
            book:'',
            isFind: false
        }

        this.authorInput        = React.createRef();
        this.priceInput         = React.createRef();
        this.renderForm         = this.renderForm.bind(this);
        this.fetchData          = this.fetchData.bind(this);
        this.renderFindNewBook  = this.renderFindNewBook.bind(this);

    }   


    fetchData(){
        var authorName = this.authorInput.value;
        var bookPrice  = this.priceInput.value;
        if(BookByNameAndPrice){
            console.log(BookByNameAndPrice);
            fetch(`https://computer-store-service.herokuapp.com/books/${authorName}/${bookPrice}`)
            .then((response) => response.json())
            .then(book => {
                if(!book.error){
                    var newBook = {
                        name:       book.result[0].name,
                        id:         book.result[0]._id,
                        price:      book.result[0].price,
                        authorName: book.result[0].author.name,
                        awards:     book.result[0].author.awards 
                    }
                }
                this.setState({
                book: newBook,
                isFind: true
                })
            })
            .catch((error) =>{console.error(error)});
        }
    }   

    renderFindNewBook(){
        return (
            <div className="bookList">
                <Book book={this.state.book}/>
                <button onClick={()=>{this.setState({isFind: false})}}className="linkBtn">Search new book</button>
            </div>

        )
    }


    
    renderForm(){
        return (
            <div className="bookById">
               <from>
                   <label>Author name: 
                        <input type="text" ref={input=> this.authorInput = input}/>
                   </label>
                   <label>Book Price: 
                        <input type="text" ref={input=> this.priceInput = input}/>
                   </label>
                   <label>
                        <button onClick={this.fetchData}>Find book</button>
                   </label>
               </from>
               <div>
                 
               </div>
            </div>
        )
    }

    render(){
        return this.state.isFind ? this.renderFindNewBook() : this.renderForm()
    }

}

export default BookByNameAndPrice
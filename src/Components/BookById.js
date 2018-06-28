import React, { Component } from 'react'
import Book from './Book';


class BookById extends Component {
    constructor(props){
        super(props);
        this.state = {
            book:'',
            isFind: false
        }

        this.textInput  = React.createRef();
        this.renderForm = this.renderForm.bind(this);
        this.fetchData  = this.fetchData.bind(this);
        this.test       = this.test.bind(this);

    }   


    fetchData(){
        var bookId = this.textInput.value
        alert(bookId);
        if(bookId){
            console.log(bookId);
            fetch(`https://computer-store-service.herokuapp.com/books/${bookId}`)
            .then((response) => response.json())
            .then(book => {
                this.setState({
                book,
                isFind: true
                })
            })
            .catch((error) =>{console.error(error)});
        }
    }   

    test(){
        return (
            <div className="bookList">
                <Book book={this.state.book.result}/>
                <button onClick={()=>{this.setState({isFind: false})}}className="linkBtn">Search new book</button>
            </div>

        )
    }


    
    renderForm(){
        return (
            <div className="bookById">
               <from>
                   <label>Book Id: 
                        <input type="text" ref={input=> this.textInput = input}/>
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
        return this.state.isFind ? this.test() : this.renderForm()
        
    }

}

export default BookById
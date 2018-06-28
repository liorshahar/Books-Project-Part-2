import React from "react";
import { Route } from "react-router-dom";
import Header from "../Components/Header";
import BookList from '../Components/BookList';
import BookById from '../Components/BookById';



const apiLinks = [
    'https://computer-store-service.herokuapp.com/books',
    'https://computer-store-service.herokuapp.com/books/:book_id',
    'https://computer-store-service.herokuapp.com/books/:authorName/:price'
]


const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header/>
            <Route exact path="/" component={BookList}/>
            <Route exact path="/getBookById" component={BookById}/>
        </React.Fragment>
    );}


export default ReactRouter;

import React              from "react";
import { Route }          from "react-router-dom";
import Header             from "../Components/Header";
import BookList           from '../Components/BookList';
import BookById           from '../Components/BookById';
import BookByNameAndPrice from '../Components/BookByNameAndPrice';


const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header/>
            <Route exact path="/" component={BookList}/>
            <Route exact path="/getBookById" component={BookById}/>
            <Route exact path="/getBookByAuthorNameAndPrice" component={BookByNameAndPrice}/>
        </React.Fragment>
    );}


export default ReactRouter;

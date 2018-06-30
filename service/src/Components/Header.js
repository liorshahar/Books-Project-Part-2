import React, { Component } from 'react'
import BookList from './BookList';
import { NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props){
        super(props);
    }   
    
    active = {
        backgroundColor: "#212F3D",
    }

    render(){
        return (
            <div>
                <div className="appLinks">
                    <h1>Books Project Part 2</h1>
                    <ul>
                        <li><NavLink exact to="/" className="linkBtn" activeStyle={this.active} >Get all books</NavLink></li>
                        <li> <NavLink exact to="/getBookById" className="linkBtn" activeStyle={this.active} >Get book by id</NavLink></li>
                        <li><NavLink exact to="/getBookByAuthorNameAndPrice" className="linkBtn" activeStyle={this.active} >Get book by author name and price</NavLink></li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Header
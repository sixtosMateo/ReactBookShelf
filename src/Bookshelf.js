import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';

class Bookshelf extends Component{


  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>My BookShelf</h1>
        </div>

        <div className="list-books-content">
          <BookList
              shelfCategory="Currently Reading"
              books={this.props.books.filter(
                book => book.shelf === "currentlyReading"
              )}
              updateShelf={this.props.updateShelf}
          />
          <BookList
              shelfCategory="Want To Read"
              books={this.props.books.filter(
                book => book.props.shelf === "wantToRead"
              )}
              updateShelf={this.updateShelf}
          />
          <BookList
              shelfCategory="Read"
              books= {this.props.books.filter(
                book => book.shelf === "read"
              )}
              updateShelf={this.props.updateShelf}
          />




        </div>

      </div>
    )


  }
}

export default Bookshelf;

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class BookList extends Component{


  render(){
    return(
      <div>
         <div className="bookshelf">
           <div className="bookshelf-books">
             <h2 className="bookshelf-title">{this.props.shelfCategory}</h2>
             <ol className="books-grid">
               {this.props.books.map(book => (
                 <li key={book.id}>
                   <Book
                     book={book}
                     updateShelf={shelf => {
                       this.props.updateShelf(book, shelf)
                     }}
                   />
                 </li>
               ))}
             </ol>
           </div>
         </div>

         <div className="open-search">
           <Link to="/search">Add a book</Link>
         </div>
       </div>
    )


  }
}

export default BookList;

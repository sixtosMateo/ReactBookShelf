import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

// import escapeRegExp from 'escape-string-regexp';
// import sortBy from 'sort-by';

class SearchPage extends Component{
  state = {
    searchedBooks:[],
    query:  ''
  }

  updateQuery=(query)=>{

    this.setState({
      query: query
    })
    this.filterBooks(query)
  }

  filterBooks=(query)=>{

    if(query){
      BooksAPI.search(query).then(
        (book)=>{
          if (book.length !== undefined) {
             book = book.filter(book => book.imageLinks);
            this.setState({searchedBooks: book})
          }
      })
    }else {
        this.setState({ books: [] });
      }


  }

  render(){
    const {query,searchedBooks} = this.state;

    return(
        <div className="search-books">
          <div className="search-books-bar">

            <Link to="/" className="close-search-page">
            <button className="close-search"> Back </button></Link>

            <div className="search-books-input-wrapper">
              <input type="text"
                     placeholder="Search by title or author"
                     value={query}
                     onChange={(event) =>
                       this.updateQuery(event.target.value)
                     }/>
            </div>
          </div>

          <div className="search-books-results">
            <ol className="books-grid">
            {
              searchedBooks.length > 0 &&(
                searchedBooks.map((book)  => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      updateShelf={shelf => {
                        this.props.updateShelf(book, shelf);
                      }}
                    />
                  </li>

                  )))
              }
            </ol>
          </div>

        </div>

    )
  }
}

export default SearchPage;

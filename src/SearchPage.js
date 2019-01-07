import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import escapeRegExp from 'escape-string-regexp';
// import sortBy from 'sort-by';

class SearchPage extends Component{
  state = {
    query:  ''
  }

  updateQuery=(query)=>{
    this.setState({
      query: query
    })

    this.props.filterBooks(query)

  }



  render(){
    const {searchedBooks} = this.props;
    const {query} = this.state;

    return(
        <div className="search-books">
          <div className="search-books-bar">

            <Link to="/" className="close-search-page">
            <button className="close-search"
                    > Back </button></Link>

            <div className="search-books-input-wrapper">
              <input type="text"
                     placeholder="Search by title or author"
                     value={query}
                     onChange={ (event) =>
                       this.updateQuery(event.target.value)
                     }/>
            </div>
          </div>

          <div className="search-books-results">
            <ol className="books-grid">
            {
              searchedBooks.length > 0 &&(
                searchedBooks.map((book)=> (

                  <li key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                              <div className="book-shelf-changer">
                                <select>
                                  <option value="move" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.author}</div>
                          </div>
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

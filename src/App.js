import React from 'react';
import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage';
import Bookshelf from './Bookshelf';
import { Route } from 'react-router-dom';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks:[]
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=> {
      // can delete since names are the same
      this.setState({books: books})
    })

  }

  filterBooks=(query)=>{
    BooksAPI.search(query).then(
      (books)=>{
        this.setState({searchedBooks: books})

    })
    console.log(this.state.searchedBooks)
  }


  render() {
    return (
      <div className="app">
          <Route exact path='/' render={()=>(
            <Bookshelf
              books={this.state.books}/>
          )}/>

          <Route path='/search' render ={({ history })=>(
            <SearchPage
              filterBooks = {this.filterBooks}
              books = {this.state.searchedBooks}/>
          )}/>

      </div>
    )
  }
}

export default BooksApp

import React from 'react';
import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage';
import Bookshelf from './Bookshelf';
import { Route } from 'react-router-dom';
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: []

  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=> {
      // can delete since names are the same
      this.setState({books: books})
    })
  }


  updateShelf = (id, shelf)=>{

    BooksAPI.update(id, shelf).then(()=>{
      BooksAPI.getAll().then(books => {
        this.setState({ books: books });
      });

    })

  }


  render() {
    return (
      <div className="app">
          <Route exact path='/' render={()=>(
            <Bookshelf
              books={this.state.books}
              updateShelf={this.updateShelf}/>
            )}
          />

          <Route path='/search' render ={({ history })=>(
            <SearchPage
            />
          )}/>
      </div>
    )
  }
}


export default BooksApp

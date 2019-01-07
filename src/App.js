import React from 'react';
import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage';
import Bookshelf from './Bookshelf';
import { Route } from 'react-router-dom';
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    query:  ''
  }

  updateQuery=(query)=>{
    this.setState({
      query: query.trim()
    })

  }

  render() {
    return (

      <div className="app">
          <Route exact path='/' render={()=>(
            <Bookshelf/>
          )}/>

          <Route path='/search' render ={({ history })=>(
            <SearchPage
              onCreateContact={(contact) =>
                {
                  this.createContact(contact)
                  history.push('/')
                }}
            />
          )}/>



      </div>
    )
  }
}

export default BooksApp

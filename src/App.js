import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './comp/SearchBooks'
import ListBooks from './comp/ListBooks'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks/> //search
            //<Books/>
        ) : (
          <ListBooks/> //main
            //<Books/>
        )}
      </div>
    )
  }
}

export default BooksApp
 
import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './comp/SearchBooks'
import ListBooks from './comp/ListBooks'
import { Route } from "react-router-dom"

class BooksApp extends React.Component {
  state = {
    bookList: [],
    showSearchPage: false
  }

  componentDidMount(){ //based off Udacity 'Render UI with External Data' course
    BooksAPI.getAll().then((books) => { //.getAll can be found in the README.md
      this.setState({ bookList: books })
    })
  }

  moveBook = (book, shelf) => { //.update() can be found in the README.md
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => { //.getAll can be found in the README.md
      this.setState({ bookList: books })
    })
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/search' render={() => (
          <SearchBooks
          moveBook={ this.moveBook } 
        />
        )} />
        <Route exact path='/' render={() => (
          <ListBooks
          bookList={ this.state.bookList }
          moveBook={ this.moveBook } 
          />
        )} />
        
      </div>
    )
  }
}

export default BooksApp

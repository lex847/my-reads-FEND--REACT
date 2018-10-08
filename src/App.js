import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './comp/SearchBooks'
import ListBooks from './comp/ListBooks'

class BooksApp extends React.Component {
  state = {
    bookList: [],
    showSearchPage: false
  }

  componentDidMount(){
    BooksAPI.getAll().then((bookList) => {
      this.setState({ bookList })
      console.log(this.state.bookList);
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks/>
        ) : (
          <ListBooks/>
        )}
      </div>
    )
  }
}

export default BooksApp

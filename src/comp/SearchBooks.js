import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Books from './Books'
//import escapeRegExp from 'escape-string-regexp'
import { Link } from 'react-router-dom' //https://stackoverflow.com/questions/40016202/reactjs-link-tag-uncaught-referenceerror-link-is-not-defined 10/16/18


class SearchBooks extends Component {

    state = {       // lifted from the Udacity React course 10/10/18
        query: '',
        booksSearched: []
    }

    updateQuery = (query) => { // lifted from the Udacity React course 10/10/18
        this.setState({
            query: query
        })
        this.pullSearchedBooks(query);
    }

    pullSearchedBooks = (query) => {
    if(query){
        BooksAPI.search(query).then((searched) => {
            if(query === this.state.query){//added check as per Udacity review
                if(searched.error){ //any errors still produce an array for .map()
                    this.setState({ booksSearched: [] })
                } else {
                    this.setState({ booksSearched: searched })
                }
            }
        })
    } else{
        this.setState({ booksSearched: [] })
    }

    }

    render() {
       // let booksSearchedVar = this.state.booksSearched;
       console.log(this.props);
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        to='/'
                        className="close-search"
                    >Close</Link>

                <div className="search-books-input-wrapper">
                    {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You  can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input 
                        type="text" 
                        placeholder="Search by title or author"
                        value={this.state.query} // lifted from the Udacity React course 10/10/18
                        onChange={(event) => {  //
                            this.updateQuery(event.target.value) //
                        }}
                    />
                </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.booksSearched.map(booksSearched => {
                            let searchedShelf = 'none';

                            this.props.bookList.map(book => (
                                book.id === booksSearched.id ? searchedShelf = book.shelf : ''
                            ));

                            return (
                                <li key={booksSearched.id}>
                                <Books
                                    innards={booksSearched}
                                    moveBook={ this.props.moveBook } 
                                    defaultShelf={searchedShelf}
                                />
                            </li>
                            )
                        }
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks
import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Books from './Books'

class SearchBooks extends Component {
    
    state = {       // lifted from the Udacity React course 10/10/18
        query: '',
        booksSearched: []
    }

    updateQuery = (query) => { // lifted from the Udacity React course 10/10/18
        this.setState({
            query: query
        })
    }

    pullSearchedBooks = (query) => {
        BooksAPI.search(query).then((booksSearched) => {
            this.setState({ booksSearched })
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
                        {this.state.booksSearched.map(function(searched){
                            (<li key={searched.id}>
                                <Books
                                    book={searched}
                                />
                            </li>)
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks
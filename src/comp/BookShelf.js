import React, { Component } from 'react'
import Books from './Books'
import { BrowserRouter } from 'react-router-dom'

class BookShelf extends Component {
      
    render(){
        let bookPass = this.props.moveBook; //'this inside of .map() was messing up so I had to define.. took a while to figure out
        console.log(this.props);
        return (
            <div className="list-books-content">
            <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.bookList.filter(function(book){
                    if (book.shelf === 'currentlyReading'){
                        return book;
                    }
                }).map(function(book){
                    return (
                        <li key={book.id}>
                            <Books
                            innards={book}
                            moveBook={ bookPass }
                            defaultShelf='currentlyReading'
                            />
                        </li>
                    )
                })}
                </ol>
            </div>
            </div>
            <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">       
                {this.props.bookList.filter(function(book){
                    if (book.shelf === 'wantToRead'){
                        return book;
                    }
                }).map(function(book){
                    return (
                        <li key={book.id}>
                        <Books
                        innards={book}
                        moveBook={ bookPass }
                        defaultShelf='wantToRead' 
 
                        />
                    </li>
                    )
                })}
                </ol>
            </div>
            </div>
            <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.bookList.filter(function(book){
                    if (book.shelf === 'read'){
                        return book;
                    }
                }).map(function(book){
                    return (
                        <li key={book.id}> {/*Taken from Udacity React Course 10/09/18 */}
                        <Books
                        innards={book}
                        moveBook={ bookPass } 
                        defaultShelf='read'

                        />
                    </li>
                    )
                })}
                </ol>
            </div>
            </div>
            </div>
        )
    }
}

export default BookShelf
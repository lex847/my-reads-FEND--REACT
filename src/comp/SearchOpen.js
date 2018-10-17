import React, { Component } from 'react'
import { Link } from 'react-router-dom' //https://stackoverflow.com/questions/40016202/reactjs-link-tag-uncaught-referenceerror-link-is-not-defined 10/16/18

class SearchOpen extends Component {

    render() {
        return (
            <div className="open-search">
                <Link
                    to='/search'
                >Add a book</Link>
            </div>
        )
    }
}

export default SearchOpen
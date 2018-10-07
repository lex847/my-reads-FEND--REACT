import React, { Component } from 'react'

class SearchOpen extends Component {

    render() {
        return (
            <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
        )
    }
}

export default SearchOpen
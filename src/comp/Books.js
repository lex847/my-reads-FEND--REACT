import React, { Component } from 'react'


class Books extends Component {

    render() {
        return (
            <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${ this.props.innards.imageLinks.thumbnail })`}}></div>
                        <div className="book-shelf-changer">
                        <select
                        onChange={(event) => this.props.moveBook( // https://www.peterbe.com/plog/onchange-in-reactjs 10/09/18
                            this.props.innards, event.target.value
                        )}
                        value={this.props.defaultShelf} // https://stackoverflow.com/questions/43495696/how-to-set-a-default-value-in-react-select 10/10/18
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.innards.title}</div>
                    <div className="book-authors">{this.props.innards.authors ? this.props.innards.authors.join(" and ") : ''}</div>
            </div>
        )
    }
}

export default Books
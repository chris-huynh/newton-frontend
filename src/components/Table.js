import React, {Component} from "react";

/*
* Table Component assumes that the OMDb search will always succeed.
* Renders the data into a table with a header row to label the data
* TODO: Handle HTTP 400 and 500 requests
* */
class Table extends Component {
    /* Statically return JSX to render the table row for the header*/
    renderTableHeader() {
        return (
            <thead>
            <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Link</th>
            </tr>
            </thead>
        )
    }

    /* Dynamically generate JSX for each table row based on the movie data provided*/
    renderTableRows() {
        return (
            this.props.children.Search.map((movie, index) => {
                const movieLink = `https://www.imdb.com/title/${movie.imdbID}`;
                return (
                    <tr key={index}>
                        <th>{movie.Title}</th>
                        <th>{movie.Year}</th>
                        <th><a href={movieLink}>{movieLink}</a></th>
                    </tr>
                )
            })
        )
    }

    render() {
        return (
            <div className="ui container">
                <h3>There are {this.props.children.totalResults} movies</h3>
                <table className="ui padded celled center aligned table">
                    {this.renderTableHeader()}
                    <tbody>{this.renderTableRows()}</tbody>
                </table>
            </div>
        )
    }
}

export default Table;
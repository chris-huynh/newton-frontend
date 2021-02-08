import Table from "./components/Table";
import React, {Component} from "react";
import axios from "axios";


class App extends Component {
    /*
    * buttonType - Determines either to display active, loading, or disabled button on screen
    * data - OMDb response that will be passed down to Table component once the search has been completed
    * */
    state = {
        buttonType: '',
        data: null
    };

    /*Render the table after search has been initiated and completed, otherwise display nothing*/
    renderTable() {
        if (this.state.data !== null) {
            return (<Table>{this.state.data}</Table>);
        }
    }

    /*
    * Set the button to a spinner while the requests are sent to the backend to query movies that contain 'newton' in the title
    * Assumes that requests will always return 200 with movie data
    * */
    initiateSearch = async () => {
        this.setState({buttonType: 'loading'})
        let movieList = [];
        let movieCount = 0;
        let page = 1;

        while (movieList.length === 0 || movieList.length < movieCount) {
            const movieResponse = await axios.get(`/newtonMovie/${page}`);
            movieList = movieList.concat(movieResponse.data.data.Search);
            movieCount = movieResponse.data.data.totalResults;
            page = page + 1;
        }

        this.setState({
            data: {totalResults: movieCount, Search: movieList},
            buttonType: 'disabled'
        });
    }

    render() {
        return (
            <div className="App">
                <div className="ui center aligned container">
                    <h1>Have you ever wondered how many movies contain 'Newton' in their title?</h1>
                    <button className={`ui primary ${this.state.buttonType} button`} onClick={this.initiateSearch}>Let's
                        find out
                    </button>
                    {this.renderTable()}
                </div>
            </div>
        );
    }
}

export default App;

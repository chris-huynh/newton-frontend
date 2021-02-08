# Newton Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Shows users how many movies contain the word `Newton` in the title. Displays the results in a table after user clicks on the button to initiate a search, to find the answer. 

This project assumes that the requests made to the backend will always return successful responses with the correlating data. Graceful error handling is a future enhancement. 

## Future Enhancements
1. Graceful error handling of HTTP 400s and 500s - Displaying meaningful messages to the end user in case the system is down or their request could not be completed at this time. Many options to consider
2. Utilizing more unit tests or approaching from a TDD perspective to ensure more modular code and to ensure more test coverage
3. Garnering customer feedback in order to narrow down on what the stakeholders want

## Installation
Run `npm install`, and project should be ready to run

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

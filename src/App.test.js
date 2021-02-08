import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text and button', () => {
  render(<App />);
  const headerElement = screen.getByText(/newton/i);
  const buttonElement = screen.getByText(/let's find out/i);
  expect(headerElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('does not initially render table', () => {
  render(<App />);
  const table = screen.queryByText(/link/i);
  expect(table).not.toBeInTheDocument();
});

/*
TODO - Test to see if table is rendered after initiating the search.
The test would:
1. find the button
2. simulate a click
3. attempt to find the table
4. expect that the table be in the document
*/
/*test('table renders after click', async () => {
  render(<App/>);
  const buttonElement = await screen.findByText(/let's find out/i);
  act(() => {
    buttonElement.dispatchEvent(new MouseEvent('click'))
  })
  const table = screen.queryByText(/link/i);
  expect(table).toBeInTheDocument();
});
*/
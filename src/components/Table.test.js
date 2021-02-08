import { render, screen } from '@testing-library/react';
import Table from "./Table";

const testData = {
    totalResults: 2,
    Search: [{Title: 'Movie Title', Year: '1970', imdbID:'abcedtesmop1245'}, {Title: 'random movie 2', Year: '2004', imdbID:'jio3m,zi;r'}]
};

test('renders table with data provided', async () => {
    render(<Table>{testData}</Table>)

    const movieTitleElement = await screen.findByText(/Movie Title/i);
    const movieYearElement = await screen.findByText(/1970/);
    const movieIdElement = await screen.findByText(/abcedtesmop1245/);

    expect(movieTitleElement).toBeInTheDocument();
    expect(movieYearElement).toBeInTheDocument();
    expect(movieIdElement).toBeInTheDocument();
});

test('renders table with 1 header row and 2 body rows with 2 movie objects provided', async () => {
    const {container} = render(<Table>{testData}</Table>);
    const rows = container.querySelectorAll("tr");
    expect(rows.length).toBe(3);
});
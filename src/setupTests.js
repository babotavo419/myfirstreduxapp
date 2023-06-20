import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders app components', () => {
    render(<App />);

    // Assert the presence of the heading
    const headingElement = screen.getByText(/Enter If You Dare/i);
    expect(headingElement).toBeInTheDocument();

    // Assert the presence of the search bar
    const searchBarElement = screen.getByPlaceholderText(/Enter search query/i);
    expect(searchBarElement).toBeInTheDocument();

    // Assert the absence of the "You asked for it" message initially
    const messageElement = screen.queryByText(/You asked for it/i);
    expect(messageElement).toBeNull();
  });
});
;

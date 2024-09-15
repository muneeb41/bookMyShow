import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import SelectMovie from '../components/SelectMovie';
import MyContext from '../context/MyContext';

// Mock the context values
const mockContextValue = {
  handleMovieSelected: vi.fn(),
  movieSelected: null,
  isDark: false,
};

// Mock the data for the movie list
vi.mock('../data', () => ({
  moviesList: ['Movie 1', 'Movie 2', 'Movie 3'],
}));

describe('SelectMovie Component', () => {
  it('renders the movie selection title and movie options', () => {
    const { getByText } = render(
      <MyContext.Provider value={mockContextValue}>
        <SelectMovie />
      </MyContext.Provider>
    );

    // Check if the title is rendered
    expect(getByText('Select a Movie :-')).toBeTruthy();

    // Check if the mock movies are rendered
    expect(getByText('Movie 1')).toBeTruthy();
    expect(getByText('Movie 2')).toBeTruthy();
    expect(getByText('Movie 3')).toBeTruthy();
  });
});

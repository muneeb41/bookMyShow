import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from '../components/Header'
import MyContext from '../context/MyContext';
import React from 'react';  // Import React

// Mock the image import
vi.mock('/logo.png', () => ({
  default: 'mocked-logo.png', // Provide a mocked image path
}));

// Mock the MyContext
const mockContextValue = {
  handleDarkToggle: vi.fn(),
  isDark: false,
};

describe('Header Component', () => {
  it('renders correctly', () => {
    // Use the mocked context
    vi.spyOn(React, 'useContext').mockReturnValue(mockContextValue);

    const { getByAltText } = render(
      <MyContext.Provider value={mockContextValue}>
        <Header />
      </MyContext.Provider>
    );

    // Check if the logo is rendered
    const logoImage = getByAltText('');
    expect(logoImage.src).toContain('mocked-logo.png');
  });
});
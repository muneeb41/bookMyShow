// src/test/SelectSeat.test.jsx
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SelectSeat from '../components/SelectSeat';
import MyContext from '../context/MyContext';
import { seats } from '../data';
import React from 'react';

// Mock the SeatOption component
vi.mock('../components/SeatOption', () => ({
  default: (props) => <div data-testid={`seat-option-${props.index}`}>{props.text}</div>,
}));

// Mock the MyContext
const mockContextValue = {
  isDark: false,
};

describe('SelectSeat Component', () => {
  it('renders correctly', () => {
    // Use the mocked context
    vi.spyOn(React, 'useContext').mockReturnValue(mockContextValue);

    const { container, getByText } = render(
      <MyContext.Provider value={mockContextValue}>
        <SelectSeat />
      </MyContext.Provider>
    );

    // Check if the title is rendered
    const titleElement = getByText('Select Seats :-');
    expect(titleElement).not.toBeNull();
    expect(container.contains(titleElement)).toBe(true);

    // Check if all seat options are rendered
    seats.forEach((seat, index) => {
      const seatOption = container.querySelector(`[data-testid="seat-option-${index}"]`);
      expect(seatOption).not.toBeNull();
      expect(seatOption.textContent).toBe(seat);
    });
  });
});

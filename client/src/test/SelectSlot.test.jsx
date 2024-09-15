// src/test/SelectSlot.test.jsx
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SelectSlot from '../components/SelectSlot';
import MyContext from '../context/MyContext';
import { slots } from '../data';
import React from 'react';

// Mock the SlotOption component
vi.mock('../components/SlotOption', () => ({
  default: (props) => <div data-testid={`slot-option-${props.index}`}>{props.text}</div>,
}));

// Mock the MyContext
const mockContextValue = {
  isDark: false,
};

describe('SelectSlot Component', () => {
  it('renders correctly', () => {
    // Use the mocked context
    vi.spyOn(React, 'useContext').mockReturnValue(mockContextValue);

    const { container, getByText } = render(
      <MyContext.Provider value={mockContextValue}>
        <SelectSlot />
      </MyContext.Provider>
    );

    // Check if the title is rendered
    const titleElement = getByText('Select a Schedule :-');
    expect(titleElement).not.toBeNull();
    expect(container.contains(titleElement)).toBe(true);

    // Check if all slot options are rendered
    slots.forEach((slot, index) => {
      const slotOption = container.querySelector(`[data-testid="slot-option-${index}"]`);
      expect(slotOption).not.toBeNull();
      expect(slotOption.textContent).toBe(slot);
    });
  });
});

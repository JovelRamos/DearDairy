import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import FoodEntryForm from '../components/FoodEntryForm';

describe('FoodEntryForm', () => {
  const foods = [
    { food_id: 1, food_name: 'Apple', is_solid: true },
    { food_id: 2, food_name: 'Watermelon', is_solid: false },
    { food_id: 3, food_name: 'Chicken', is_solid: true },
    { food_id: 4, food_name: 'Salmon', is_solid: true },
  ];

  const handleEntryMock = jest.fn();

  beforeEach(() => {
    render(<FoodEntryForm handleEntry={handleEntryMock} foods={foods} />);
  });

  it('renders the form', () => {
    expect(screen.getByRole('button', { name: /submit entry/i })).toBeInTheDocument();
  });

  it('adds a food dropdown on click of Add Food! button', () => {
    const addButton = screen.getByRole('button', { name: /add food!/i });

    act(() => {
      userEvent.click(addButton);
    });

    expect(screen.getAllByRole('combobox')).toHaveLength(2);
  });

  it('handles form submission and calls handleEntry', () => {
    const foodDropdown = screen.getAllByRole('combobox')[0];
    const servingSizeInput = screen.getAllByRole('spinbutton')[0];
    const unitDropdown = screen.getAllByRole('combobox')[1];
    const submitButton = screen.getByRole('button', { name: /submit entry/i });

    // Select Apple from the dropdown
    act(() => {
      userEvent.selectOptions(foodDropdown, 'Apple');
    });

    // Enter serving size
    act(() => {
      userEvent.type(servingSizeInput, '1');
    });

    // Select unit from the dropdown
    act(() => {
      userEvent.selectOptions(unitDropdown, 'oz');
    });

    // Submit the form
    act(() => {
      userEvent.click(submitButton);
    });

    expect(handleEntryMock).toHaveBeenCalledWith([
      {
        food: 'Apple',
        calories: 52,
        proteins: 0,
        fats: 0,
        carbohydrates: 14,
      },
    ]);
  });
});

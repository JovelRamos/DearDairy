import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import FoodEntryForm from '../components/FoodEntryForm';

describe('FoodEntryForm', () => {
  const mockHandleEntry = jest.fn();
  const mockFoods = [
    { food_id: 1, food_name: 'apple', is_solid: true },
    { food_id: 2, food_name: 'milk', is_solid: false },
  ];

  it('renders the form with one dropdown and two inputs', () => {
    render(<FoodEntryForm handleEntry={mockHandleEntry} foods={mockFoods} />);
    const dropdown = screen.getByRole('combobox');
    const sizeInput = screen.getByPlaceholderText('Size');
    const unitDropdown = screen.getByPlaceholderText('Unit');
    const submitButton = screen.getByText('Submit Entry');

    expect(dropdown).toBeInTheDocument();
    expect(sizeInput).toBeInTheDocument();
    expect(unitDropdown).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('allows user to select food, size and unit options and submit form', async () => {
    render(<FoodEntryForm handleEntry={mockHandleEntry} foods={mockFoods} />);
    const dropdown = screen.getByRole('combobox');
    const sizeInput = screen.getByPlaceholderText('Size');
    const unitDropdown = screen.getByPlaceholderText('Unit');
    const submitButton = screen.getByText('Submit Entry');

    await act(async () => {
      await userEvent.selectOptions(dropdown, 'apple');
      await userEvent.type(sizeInput, '100');
      await userEvent.selectOptions(unitDropdown, 'g');
      fireEvent.click(submitButton);
    });

    expect(mockHandleEntry).toHaveBeenCalledTimes(1);
    expect(mockHandleEntry).toHaveBeenCalledWith([
      { food: 'apple', calories: 52, proteins: 0, fats: 0, carbohydrates: 14 }
    ]);
  });
});

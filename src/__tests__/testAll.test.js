import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import FoodEntryStack from '../components/FoodEntryStack';
import FoodEntryForm from '../components/FoodEntryForm';
import FoodEntry from '../components/FoodEntry';
import App from '../App';
import { data } from '../components/data.json';

describe('Food Entry Application', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders the application header', () => {
    const headerElement = screen.getByText(/Dear Dairy/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the Food Entry form', async () => {
    const foodDropdown = await screen.findByTestId('food-dropdown');
    const sizeInput = screen.getByPlaceholderText(/Size/i);
    const unitDropdown = screen.getByTestId('unit-dropdown');
    const addButton = screen.getByText(/Add Food!/i);
    const submitButton = screen.getByText(/Submit Entry/i);

    expect(foodDropdown).toBeInTheDocument();
    expect(sizeInput).toBeInTheDocument();
    expect(unitDropdown).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('adds a food entry to the table and displays the total row', async () => {
    const foodDropdown = screen.getByTestId('food-dropdown');
    const sizeInput = screen.getByPlaceholderText(/Size/i);
    const unitDropdown = screen.getByTestId('unit-dropdown');
    const submitButton = screen.getByText(/Submit Entry/i);
  
    // Select the first food from the data
    fireEvent.click(foodDropdown);
    const foodOption = screen.getByText(/Zesty Italian Salad Dressing/i);
    fireEvent.click(foodOption);
  
    // Set the serving size
    fireEvent.change(sizeInput, { target: { value: '1' } });
  
    // Select the first unit for the food
    fireEvent.click(unitDropdown);
    const unitOptions = screen.getAllByText(/oz/i);
    fireEvent.click(unitOptions[0]); // Assuming the desired option is the first one
  
    // Submit the form
    fireEvent.click(submitButton);
  
    // Check if the entry is added to the table
    const foodEntry = screen.getByTestId("food-entry");
    expect(foodEntry).toBeInTheDocument();
  
    // Check if the total row is displayed
    const totalRow = screen.getByText(/Total/i);
    expect(totalRow).toBeInTheDocument();
  });

  test('adds multiple food entries to the table', async () => {
    const foodDropdown = screen.getByTestId('food-dropdown');
    const sizeInput = screen.getByPlaceholderText(/Size/i);
    const unitDropdown = screen.getByTestId('unit-dropdown');
    const addButton = screen.getByText(/Add Food!/i);
    const submitButton = screen.getByText(/Submit Entry/i);

    // Add first food entry
    fireEvent.click(foodDropdown);
    fireEvent.click(screen.getByText(/Zesty Italian Salad Dressing/i));
    fireEvent.change(sizeInput, { target: { value: '1' } });
    fireEvent.click(unitDropdown);
    fireEvent.click(screen.getAllByText(/oz/i)[0]);
    fireEvent.click(addButton);

    // Add second food entry
    fireEvent.click(foodDropdown);
    fireEvent.click(screen.getAllByText(/Banana/i)[1]);
    fireEvent.change(sizeInput, { target: { value: '1' } });
    fireEvent.click(unitDropdown);
    fireEvent.click(screen.getByText(/unit/i));
    fireEvent.click(submitButton);

    const foodEntries = screen.getAllByTestId("food-entry");
    expect(foodEntries).toHaveLength(2);
  });

  test('deletes a food entry from the table', async () => {
    const foodDropdown = screen.getByTestId('food-dropdown');
    const sizeInput = screen.getByPlaceholderText(/Size/i);
    const unitDropdown = screen.getByTestId('unit-dropdown');
    const submitButton = screen.getByText(/Submit Entry/i);
  
    // Add a food entry
    fireEvent.click(foodDropdown);
    fireEvent.click(screen.getByText(/Zesty Italian Salad Dressing/i));
    fireEvent.change(sizeInput, { target: { value: '1' } });
    fireEvent.click(unitDropdown);
    fireEvent.click(screen.getAllByText(/oz/i)[0]);
    fireEvent.click(submitButton);
  
    // Delete the food entry
    const deleteButton = screen.getByTestId('delete-button');
    fireEvent.click(deleteButton);
    await waitFor(() => expect(screen.queryByTestId("food-entry")).not.toBeInTheDocument());
  });

  
});

import { render, fireEvent } from '@testing-library/react';
import FoodEntryStack from '../components/FoodEntryStack';

test('renders the app without errors', () => {
  render(<FoodEntryStack />);
});

test('adds a new entry to the diary', () => {
  const { getByPlaceholderText, getByText } = render(<FoodEntryStack />);
  const foodDropdown = getByPlaceholderText('Select food'); // Update placeholder text
  const sizeInput = getByPlaceholderText('Size');
  const addButton = getByText('Add Food!');

  fireEvent.change(foodDropdown, { target: { value: 'Almonds' } }); // Keep the value as Almonds
  fireEvent.change(sizeInput, { target: { value: '1' } });
  fireEvent.click(addButton);

  const entry = getByText('Almonds');
  expect(entry).toBeInTheDocument();
});


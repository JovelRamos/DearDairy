import { render, fireEvent } from '@testing-library/react';
import FoodEntryStack from '../components/FoodEntryStack';

test('renders the app without errors', () => {
  render(<FoodEntryStack />);
});

test('adds a new entry to the diary', () => {
  const { getByPlaceholderText, getByText } = render(<FoodEntryStack />);
  const foodDropdown = getByPlaceholderText('Select food');
  const sizeInput = getByPlaceholderText('Size');
  const addButton = getByText('Add Food!');

  fireEvent.change(foodDropdown, { target: { value: 'Apple' } });
  fireEvent.change(sizeInput, { target: { value: '1' } });
  fireEvent.click(addButton);

  const entry = getByText('Apple');
  expect(entry).toBeInTheDocument();
});


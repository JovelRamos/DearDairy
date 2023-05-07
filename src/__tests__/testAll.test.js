import { render, fireEvent, waitFor } from '@testing-library/react';
import FoodEntryStack from '../components/FoodEntryStack';

test('renders the app without errors', () => {
  render(<FoodEntryStack />);
});

test('adds a new entry to the diary', async () => {
  const { getByPlaceholderText, getByText } = render(<FoodEntryStack />);
  const foodDropdown = getByPlaceholderText('Select food');

  fireEvent.change(foodDropdown, { target: { value: 'Apple' } });

  const sizeInput = getByPlaceholderText('Size');
  const servingUnitInput = getByPlaceholderText('Serving unit');

  fireEvent.change(sizeInput, { target: { value: '100' } });
  fireEvent.change(servingUnitInput, { target: { value: 'grams' } });

  const addButton = getByText('Add Food!');
  fireEvent.click(addButton);

  await waitFor(() => getByText('Almonds'));

  const servingQtyInput = getByPlaceholderText('Serving qty');

  expect(sizeInput).toBeInTheDocument();
  expect(servingUnitInput).toBeInTheDocument();
  expect(servingQtyInput).toBeInTheDocument();
});

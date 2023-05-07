import { render, fireEvent, waitFor } from '@testing-library/react';
import FoodEntryStack from '../components/FoodEntryStack';

test('renders the app without errors', () => {
  render(<FoodEntryStack />);
});

test('adds a new entry to the diary', async () => {
  const { getByPlaceholderText, getByText } = render(<FoodEntryStack />);
  const foodDropdown = await waitFor(() => getByPlaceholderText('Select food'), { timeout: 5000 });
  const addButton = getByText('Add Food!');

  fireEvent.change(foodDropdown, { target: { value: 'Apple' } });
  fireEvent.click(addButton);

  const sizeInput = getByPlaceholderText('Size');
  const servingUnitInput = getByPlaceholderText('Serving unit');
  const servingQtyInput = getByPlaceholderText('Serving qty');

  expect(sizeInput).toBeInTheDocument();
  expect(servingUnitInput).toBeInTheDocument();
  expect(servingQtyInput).toBeInTheDocument();
});

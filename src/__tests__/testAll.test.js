import { render, fireEvent } from '@testing-library/react';
import FoodEntryStack from '../components/FoodEntryStack';

test('renders the app without errors', () => {
render(<FoodEntryStack />);
});

test('adds a new entry to the diary', () => {
const { getByPlaceholderText, getByText } = render(<FoodEntryStack />);
const foodDropdown = getByPlaceholderText('Select food');
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

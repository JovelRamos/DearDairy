import { render, fireEvent, waitFor } from '@testing-library/react';
import FoodEntryStack from '../components/FoodEntryStack';

test('renders the app without errors', () => {
  render(<FoodEntryStack />);
});

test('adds a new entry to the diary', async () => {
    const { getByText, findByText } = render(<FoodEntryStack />);
    const foodDropdown = getByText('Select food'); // Change this line
    
    fireEvent.click(foodDropdown); // open dropdown menu
    const searchInput = getByPlaceholderText('Search foods');
    fireEvent.change(searchInput, { target: { value: 'Almonds' } }); // search for Almonds
    fireEvent.click(getByText('Almonds')); // select Almonds
    
    const sizeInput = getByPlaceholderText('Size');
    const servingUnitDropdown = getByText('Unit');
    
    fireEvent.change(sizeInput, { target: { value: '100' } });
    fireEvent.click(servingUnitDropdown);
    fireEvent.click(getByText('g'));
    
    fireEvent.click(foodDropdown); // open dropdown menu again
    
    const addButton = getByText('Add Food!');
    fireEvent.click(addButton);
    
    await findByText('Almonds');
  });
  
  
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';


test('Save, edit, and delete a diary entry', async () => {
  render(<App />);

  // Test saving a diary entry
  const textarea = screen.getByPlaceholderText('Write your Dear Diary entry here...');
  const saveButton = screen.getByText('Save Entry');

  userEvent.type(textarea, 'My first diary entry');
  userEvent.click(saveButton);

  await waitFor(() => screen.getByText('My first diary entry'));

  expect(screen.getByText('My first diary entry')).toBeInTheDocument();

  // Test editing a diary entry
  const editButton = screen.getByText('Edit');
  userEvent.click(editButton);

  const updatedEntryText = 'My first diary entry (edited)';
  const editingTextarea = screen.getByDisplayValue('My first diary entry');
  const saveEditButton = screen.getByText('Save');

  userEvent.clear(editingTextarea);
  userEvent.type(editingTextarea, updatedEntryText);
  userEvent.click(saveEditButton);

  await waitFor(() => screen.getByText(updatedEntryText));

  expect(screen.getByText(updatedEntryText)).toBeInTheDocument();

  // Test deleting a diary entry
  const deleteButton = screen.getByText('Delete');
  userEvent.click(deleteButton);

  await waitFor(() => expect(screen.queryByText(updatedEntryText)).not.toBeInTheDocument());
});

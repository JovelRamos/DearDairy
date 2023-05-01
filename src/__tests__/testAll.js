import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';


describe('Diary entry submission, editing, canceling edit, and deleting', () => {
  test('submitting, editing, canceling edit of a diary entry, and deleting', async () => {
    render(<App />);
    const textarea = screen.getByPlaceholderText('Write your Dear Diary entry here...');
    const submitButton = screen.getByText('Save Entry');

    // Type a diary entry text into the textarea
    await act(async () => {
      await userEvent.type(textarea, 'My first diary entry!');
    });

    // Click the submit button
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Expect the submitted entry to be in the document
    expect(screen.getByText('My first diary entry!')).toBeInTheDocument();

    // Expect the textarea to be cleared after submission
    expect(textarea).toHaveValue('');

    // Click the Edit button
    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);

    // Type an updated diary entry into the textarea
    await act(async () => {
      await userEvent.type(textarea, 'My updated diary entry!');
    });

    // Click the Cancel button
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    // Expect the original entry to be in the document
    expect(screen.getByText('My first diary entry!')).toBeInTheDocument();

    // Expect the textarea to still contain the updated entry
    expect(textarea).toHaveValue('My updated diary entry!');

    // Expect the textarea to still contain the updated entry
    expect(textarea).toHaveValue('My updated diary entry!');

    // Click the Delete button
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    // Expect the original entry not to be in the document
    expect(screen.queryByText('My first diary entry!')).toBeNull();
  });
});
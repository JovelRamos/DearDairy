import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';


describe('Diary entry submission', () => {
  test('submitting a diary entry', async () => {
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
  });
});


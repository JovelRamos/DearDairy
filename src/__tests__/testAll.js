import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';


describe('Diary entry submission', () => {
  test('submitting a diary entry', () => {
    render(<App />);
    const textarea = screen.getByPlaceholderText('Write your Dear Diary entry here...');
    const submitButton = screen.getByText('Save Entry');

    // Type a diary entry text into the textarea
    userEvent.type(textarea, 'My first diary entry!');

    // Click the submit button
    fireEvent.click(submitButton);

    // Expect the submitted entry to be in the document
    expect(screen.getByText('My first diary entry!')).toBeInTheDocument();

    // Expect the textarea to be cleared after submission
    expect(textarea).toHaveValue('');
  });
});

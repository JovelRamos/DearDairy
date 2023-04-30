import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('adds and displays a new diary entry', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Write your Dear Dairy entry here...');
    fireEvent.change(input, { target: { value: 'This is my new diary entry' } });
    fireEvent.click(screen.getByText('Save Entry'));
    expect(screen.getByText('This is my new diary entry')).toBeInTheDocument();
  });

  test('edits an existing diary entry', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Write your Dear Dairy entry here...');
    fireEvent.change(input, { target: { value: 'This is my new diary entry' } });
    fireEvent.click(screen.getByText('Save Entry'));
    fireEvent.click(screen.getByText('Edit'));
    const editInput = screen.getByDisplayValue('This is my new diary entry');
    fireEvent.change(editInput, { target: { value: 'This is my edited diary entry' } });
    fireEvent.click(screen.getByText('Save'));
    expect(screen.getByText('This is my edited diary entry')).toBeInTheDocument();
  });

  test('deletes an existing diary entry', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Write your Dear Dairy entry here...');
    fireEvent.change(input, { target: { value: 'This is my new diary entry' } });
    fireEvent.click(screen.getByText('Save Entry'));
    expect(screen.getByText('This is my new diary entry')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText('This is my new diary entry')).not.toBeInTheDocument();
  });
});
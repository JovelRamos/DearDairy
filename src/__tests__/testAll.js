import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'


test('displays the app title', () => {
  const { getByText } = render(<App />);
  expect(getByText('Dear Dairy')).toBeInTheDocument();
});

test('displays a diary entry form', () => {
  const { getByPlaceholderText } = render(<App />);
  expect(getByPlaceholderText('Write your Dear Dairy entry here...')).toBeInTheDocument();
});

test('adds a new diary entry', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const input = getByPlaceholderText('Write your Dear Dairy entry here...');
  const button = getByText('Save Entry');
  fireEvent.change(input, { target: { value: 'My new entry' } });
  fireEvent.click(button);
  expect(getByText('My new entry')).toBeInTheDocument();
});

test('edits an existing diary entry', () => {
  const { getByText, getByLabelText } = render(<App />);
  const entryText = 'My old entry';
  const newText = 'My updated entry';
  const editButton = getByLabelText('Edit');
  fireEvent.click(editButton);
  const input = getByLabelText('Edit entry');
  fireEvent.change(input, { target: { value: newText } });
  const saveButton = getByLabelText('Save');
  fireEvent.click(saveButton);
  expect(getByText(newText)).toBeInTheDocument();
});

test('deletes a diary entry', () => {
  const { getByText, getByLabelText } = render(<App />);
  const entryText = 'My entry to delete';
  const deleteButton = getByLabelText('Delete');
  fireEvent.click(deleteButton);
  expect(getByText(entryText)).not.toBeInTheDocument();
});
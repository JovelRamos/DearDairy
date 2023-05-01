import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'

describe('App', () => {
  it('renders the header', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText('Dear Dairy');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the footer', () => {
    const { getByText } = render(<App />);
    const footerElement = getByText('© 2023 Dear Dairy. All rights reserved.');
    expect(footerElement).toBeInTheDocument();
  });
});
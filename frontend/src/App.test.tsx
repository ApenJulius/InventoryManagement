import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Main from './pages/Main/Main';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

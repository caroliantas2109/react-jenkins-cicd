import '@testing-library/jest-dom';
// This import allows us to use custom matchers like toBeInTheDocument()

import { render, screen } from '@testing-library/react';
import App from './App';

// Test 1: Check if the group number is displayed on the page
test('renders group number', () => {
  render(<App />);
  // Render the App component into a virtual DOM for testing

  const groupText = screen.getByText(/Group 5/i);
  // Find text that matches "Group 5" (case-insensitive)

  expect(groupText).toBeInTheDocument();
  // Check if the group number exists in the page
});

// Test 2: Check if all team members' names are displayed
test('renders team members', () => {
  render(<App />);
  // Render the App component again

  expect(screen.getByText(/Carol Iantas/i)).toBeInTheDocument();
  expect(screen.getByText(/Heather Hallberg/i)).toBeInTheDocument();
  expect(screen.getByText(/Pedro Kuchak Molina/i)).toBeInTheDocument();
  expect(screen.getByText(/Ty Landry/i)).toBeInTheDocument();

});
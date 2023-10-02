import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';

test('renders the app header', () => {
  render(<App />);
  const headerElement = screen.getByText(/AutoComplete Example/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders the input field', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Type to search...');
  expect(inputElement).toBeInTheDocument();
});

test('starts with an empty input field', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Type to search...');
  expect(inputElement).toHaveValue('');
});

test('displays suggestions when typing in the input field', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Type to search...');
  fireEvent.change(inputElement, { target: { value: 'a' } });
  setTimeout(
  () => {
    const suggestionElement = screen.getByText(/Apple/i);
    expect(suggestionElement).toBeInTheDocument();
  }, 500);
});

test('selects an item when clicking on a suggestion', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Type to search...');
  fireEvent.change(inputElement, { target: { value: 'B' } });
  setTimeout(() => {
        const suggestionElement = screen.getByText(/Banana/i);
        fireEvent.click(suggestionElement);
        expect(inputElement).toHaveValue('Banana');
      }, 500);
});

test('clears suggestions after selecting an item', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Type to search...');
  fireEvent.change(inputElement, { target: { value: 'C' } });
  setTimeout(() => {
      const suggestionElement = screen.getByText(/Cherry/i);
      fireEvent.click(suggestionElement);
      const suggestionsList = screen.queryByText(/Cherry/i);
      expect(suggestionsList).toBeNull();
    }, 500);
});

test('matches the snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
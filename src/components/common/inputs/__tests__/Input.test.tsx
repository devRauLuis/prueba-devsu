import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../Input';

test('renders Input component and changes its value', () => {
  render(<Input />);
  const inputElement: HTMLInputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: 'test value' } });
  expect(inputElement.value).toBe('test value');
});

import { render, screen, fireEvent } from '@testing-library/react';
import Select from '../Select';

test('renders Select component with options and selects an option', () => {
  render(<Select options={['Option 1', 'Option 2']} />);
  const selectElement: HTMLSelectElement = screen.getByRole('combobox');
  expect(selectElement).toBeInTheDocument();

  fireEvent.change(selectElement, { target: { value: 'Option 1' } });
  expect(selectElement.value).toBe('Option 1');
});

import { render, fireEvent, screen } from '@testing-library/react';
import Menu from '../Menu';

jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createPortal: (node: React.ReactNode) => node,
  };
});

test('renders menu and toggles options on trigger click', () => {
  const options = [
    { label: 'Option 1', onClick: jest.fn() },
    { label: 'Option 2', onClick: jest.fn() },
  ];

  const trigger = <button>Open menu</button>;

  render(<Menu options={options} trigger={trigger} />);

  // Check that menu options are not visible initially
  options.forEach((option) => {
    expect(screen.queryByText(option.label)).not.toBeInTheDocument();
  });

  // Click the trigger to open the menu
  fireEvent.click(screen.getByText('Open menu'));

  // Check that menu options are now visible
  options.forEach((option) => {
    expect(screen.getByText(option.label)).toBeInTheDocument();
  });

  // Click the trigger again to close the menu
  fireEvent.click(screen.getByText('Open menu'));

  // Check that menu options are not visible again
  options.forEach((option) => {
    expect(screen.queryByText(option.label)).not.toBeInTheDocument();
  });
});

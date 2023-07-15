import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

test('renders Button component and clicks it', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Test Button</Button>);
  const buttonElement = screen.getByRole('button', { name: /Test Button/i });
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

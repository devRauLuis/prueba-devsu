import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from '../Root';

test('renders Root component', () => {
  render(
    <Router>
      <Root />
    </Router>,
  );

  // Check if the header is rendered
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();

  // Check if the main section is rendered
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});

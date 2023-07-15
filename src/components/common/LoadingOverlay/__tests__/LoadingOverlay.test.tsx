import { render, screen } from '@testing-library/react';
import LoadingOverlay from '..';

test('renders loading spinner when isLoading is true', () => {
  render(
    <LoadingOverlay isLoading={true}>
      <div>Test content</div>
    </LoadingOverlay>,
  );

  const spinner = screen.getByTestId('loading-spinner');
  expect(spinner).toBeInTheDocument();
});

test('does not render loading spinner when isLoading is false', () => {
  render(
    <LoadingOverlay isLoading={false}>
      <div>Test content</div>
    </LoadingOverlay>,
  );

  const spinner = screen.queryByRole('img');
  expect(spinner).not.toBeInTheDocument();
});

test('always renders children', () => {
  const { rerender } = render(
    <LoadingOverlay isLoading={true}>
      <div>Test content</div>
    </LoadingOverlay>,
  );

  expect(screen.getByText('Test content')).toBeInTheDocument();

  rerender(
    <LoadingOverlay isLoading={false}>
      <div>Test content</div>
    </LoadingOverlay>,
  );

  expect(screen.getByText('Test content')).toBeInTheDocument();
});

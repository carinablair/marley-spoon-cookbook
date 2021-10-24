import { render, waitFor } from '@testing-library/react';
import App from './App';

test('renders recipe title', async () => {
  const renderResult = render(<App />);

  await waitFor(() => {
    expect(
      renderResult.getByText('White Cheddar Grilled Cheese with Cherry Preserves & Basil'))
      .toBeInTheDocument();
  });
});

test('renders recipe image', async () => {
  const renderResult = render(<App />);

  await waitFor(() => {
    expect(
      renderResult.getByAltText('White Cheddar Grilled Cheese with Cherry Preserves & Basil'))
      .toBeInTheDocument();
  });
});

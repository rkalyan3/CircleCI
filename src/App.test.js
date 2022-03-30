import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Test text rendering after button click', () => {
  render(<App />);
  const mockCallBack = jest.fn();
  const button = screen.getByRole('button')

  fireEvent.click(button);

  expect(screen.getByText(/circleci-app/));
});

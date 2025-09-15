import { render, screen } from '@testing-library/react';

function Hello() {
  return <h1>Hello Playground</h1>;
}

it('renders a heading', () => {
  render(<Hello />);
  expect(screen.getByText('Hello Playground')).toBeInTheDocument();
});

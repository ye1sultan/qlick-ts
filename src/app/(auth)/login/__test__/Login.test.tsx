import { render, screen } from '@testing-library/react';
import Login from '../page';
import { AuthHeader } from '../../components/Header';

describe('Login Page', () => {
  it('has auth header', () => {
    render(<AuthHeader text='Welcome back!' />);

    const elem = screen.getByText(/Welcome back!/i);

    expect(elem).toBeInTheDocument();
  });

  it('has email input', () => {
    render(<Login />);

    const elem = screen.getByTestId('email-input');

    expect(elem).toBeInTheDocument();
  });

  it('has password input', () => {
    render(<Login />);

    const elem = screen.getByTestId('password-input');

    expect(elem).toBeInTheDocument();
  });

  it('has forgot password button', () => {
    render(<Login />);

    const elem = screen.getByRole("button", { name: /Forgot password?/i });

    expect(elem).toBeInTheDocument();
  });
});
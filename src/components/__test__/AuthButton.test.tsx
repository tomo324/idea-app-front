import { render, screen } from '@testing-library/react';
import AuthButton from '../AuthButton/AuthButton';


  test('Sign upを渡すとSign upというテキストを取得できる', () => {
    render(<AuthButton path="/auth/signin">Sign up</AuthButton>);
    const textElement = screen.getByText(/Sign up/i);
    expect(textElement).toBeInTheDocument();
  });

  test('Sign inを渡すとSign inというテキストを取得できる', () => {
    render(<AuthButton path="/auth/signup">Sign in</AuthButton>);
    const textElement = screen.getByText(/Sign in/i);
    expect(textElement).toBeInTheDocument();
  });

  test('正しいpathがLinkコンポーネントに渡されている', () => {
    render(
        <AuthButton path="/auth/signup">Sign in</AuthButton>
    );
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/auth/signup');
  });
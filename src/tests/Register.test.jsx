import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { toast } from 'react-toastify'; 
import Register from '../components/Auth/Register'; 
import '@testing-library/jest-dom';

const mockStore = configureStore([]);
let store;

vi.mock('react-toastify', () => ({
  toast: {
    success: vi.fn(),
  },
}));

describe('Register Component', () => {
  beforeEach(() => {
    store = mockStore({});
  });

  test('renders register modal with form elements', () => {
    render(
      <Provider store={store}>
        <Register show={true} handleClose={vi.fn()} />
      </Provider>
    );

    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Mật khẩu')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Xác nhận mật khẩu')).toBeInTheDocument();
    expect(screen.getByText('Tiếp tục')).toBeInTheDocument();
    expect(screen.getByText('Đăng kí bằng Google')).toBeInTheDocument();
    expect(screen.getByText('Đăng kí bằng Facebook')).toBeInTheDocument();
  });

  test('shows error message when passwords do not match', async () => {
    const handleClose = vi.fn();

    render(
      <Provider store={store}>
        <Register show={true} handleClose={handleClose} />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'testuser@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Mật khẩu'), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByPlaceholderText('Xác nhận mật khẩu'), {
      target: { value: 'password456' }, 
    });

    fireEvent.click(screen.getByText('Tiếp tục'));

    await waitFor(() => {
      expect(screen.getByText('Mật khẩu và xác nhận mật khẩu không khớp')).toBeInTheDocument();
    });

    expect(handleClose).not.toHaveBeenCalled();
  });

  test('successful registration and closing modal', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ token: 'mockToken', username: 'testuser', email: 'testuser@example.com', fullName: 'testuser' }),
      })
    );

    const handleClose = vi.fn();

    render(
      <Provider store={store}>
        <Register show={true} handleClose={handleClose} />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'testuser@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Mật khẩu'), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByPlaceholderText('Xác nhận mật khẩu'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText('Tiếp tục'));

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
      expect(toast.success).toHaveBeenCalledWith('Đăng ký thành công!');
    });
  });
});

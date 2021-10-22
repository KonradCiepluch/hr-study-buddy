import { render, screen, fireEvent, waitFor } from 'test-utils';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';

describe('Search Bar', () => {
  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getAllByPlaceholderText('Search');
  });

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Agn' } });

    await screen.findByText(/Agnes/);
  });

  it('Checks if list is present when search phrase is empty', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Agn' } });
    await screen.findByText(/Agnes/);
    fireEvent.change(input, { target: { value: '' } });

    await waitFor(() => {
      expect(screen.getByLabelText('results')).not.toBeVisible();
    });
  });
});

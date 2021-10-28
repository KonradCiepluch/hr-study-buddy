import React from 'react';
import AddStudent from './AddUser';
import Dashboard from './Dashboard';
import '@testing-library/jest-dom';
import { screen, fireEvent } from 'test-utils';
import { render } from 'test-utils';

describe('Form Field', () => {
  it('Adds new student to the list', () => {
    /* renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
     fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grażyna' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '3.2' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Grażyna'); */
  });

  it('Prevents adding new student if the consent is not checked', () => {
    /*     renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
       fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grażyna' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '3.2' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Grażyna');
    expect(newUser).not.toBeInTheDocument(); */
  });
});

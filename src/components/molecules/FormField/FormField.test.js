import '@testing-library/jest-dom';
import React from 'react';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import FormField from './FormField';

describe('FormField', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" value="" onChange={() => {}} />);
  });
});

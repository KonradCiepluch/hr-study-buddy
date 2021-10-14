import '@testing-library/jest-dom';
import React from 'react';
import { render } from 'test-utils';
import FormField from './FormField';

describe('FormField', () => {
  it('Renders the component', () => {
    render(<FormField label="name" name="name" id="name" value="" onChange={() => {}} />);
  });
});

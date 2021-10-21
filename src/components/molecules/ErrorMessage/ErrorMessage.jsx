import React from 'react';
import PropTypes from 'prop-types';
import { ErrorWrapper } from './ErrorMessage.styles';
import { Title } from 'components/atoms/Title/Title.styles';

const ErrorMessage = ({ message }) => {
  return (
    <ErrorWrapper>
      <Title as="h3">Oops!</Title>
      {message}
    </ErrorWrapper>
  );
};

ErrorMessage.defaultProps = {
  message: 'Something went wrong. Please try again, or contact our support.',
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;

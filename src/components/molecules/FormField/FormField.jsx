import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input.styles';
import Label from 'components/atoms/Label/Label.styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  align-items: flex-start;

  ${Label} {
    margin: 10px 0;
  }
`;

const FormField = React.forwardRef(({ onChange, value, label, name, id, type = 'text', checked, isTextArea, ...props }, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      {isTextArea ? (
        <Input
          as="textarea"
          {...props}
          ref={ref}
          checked={checked}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          data-testid={label}
          isTextArea={isTextArea}
        />
      ) : (
        <Input {...props} ref={ref} checked={checked} name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} />
      )}
    </Wrapper>
  );
});

FormField.propTypes = {
  onChange: PropTypes.func.isRequired,
  // value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  checked: PropTypes.bool,
};

export default FormField;

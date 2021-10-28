import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input.styles';
import Label from 'components/atoms/Label/Label.styles';
import Select from 'components/atoms/Select/Select.styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  align-items: flex-start;

  ${Label} {
    margin: 10px 0;
  }
`;

const FormField = React.forwardRef(({ select, onChange, value, label, name, id, type = 'text', checked, isTextArea, ...props }, ref) => {
  if (select)
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Select name={name} id={id} onChange={onChange} value={value} ref={ref} {...props}>
          <option value=""></option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </Select>
      </Wrapper>
    );

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

FormField.defaultProps = {
  select: false,
  type: 'text',
  isTextArea: false,
};

FormField.propTypes = {
  select: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  checked: PropTypes.bool,
  isTextArea: PropTypes.bool,
};

export default FormField;

import styled from 'styled-components';
import FormField from 'components/molecules/FormField/FormField';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  align-content: start;
  grid-gap: 30px;
  padding: 30px;
`;

export const FormWrapper = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledFormField = styled(FormField)`
  width: 100%;
  height: ${({ isTextArea }) => (isTextArea ? '300px' : 'auto')};
`;

export const NotesWrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
`;

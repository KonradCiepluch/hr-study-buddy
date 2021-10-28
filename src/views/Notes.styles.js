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

  @media (max-width: 1240px) {
    padding: 15px;
    grid-template-rows: 0.5fr 1.3fr;
    grid-template-columns: 1fr;
    justify-items: center;
  }
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

  @media (max-width: 1240px) {
    align-items: center;
    width: 80%;
  }
`;

export const StyledFormField = styled(FormField)`
  width: 100%;
  height: ${({ isTextArea }) => (isTextArea ? '300px' : 'auto')};
`;

export const NotesWrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1240px) {
    padding: 20px 40px;
  }
`;

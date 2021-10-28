import { useReducer } from 'react';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
  toggleConsent: 'TOGGLE CONSENT',
  resetErrors: 'RESET ERRORS',
  throwError: 'THROW ERROR',
};

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  group: '-',
  consent: false,
  errors: { name: '', attendance: '', average: '', group: '', consent: '' },
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return { ...state, [action.name]: action.value };
    case actionTypes.clearValues:
      return { ...action.initialValues };
    case actionTypes.toggleConsent:
      return { ...state, consent: !state.consent };
    case actionTypes.throwError:
      return { ...state, errors: { ...state.errors, [action.name]: action.errorValue } };
    case actionTypes.resetErrors:
      return { ...state, errors: { ...state.errors, [action.name]: action.initialValues.errors[action.name] } };
    default:
      return state;
  }
};

const useForm = (initialValues = initialFormState) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);

  const handleInputChange = (e) => {
    dispatch({ type: actionTypes.inputChange, name: e.target.name, value: e.target.value });
  };
  const handleClearForm = () => {
    dispatch({ type: actionTypes.clearValues, initialValues });
  };
  const handleThrowError = (name, errorMessage) => {
    dispatch({ type: actionTypes.throwError, name, errorValue: errorMessage });
  };
  const handleToggleConsent = () => {
    dispatch({ type: actionTypes.toggleConsent });
  };
  const handleResetErrors = (name) => {
    dispatch({ type: actionTypes.resetErrors, name });
  };
  return {
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleToggleConsent,
    handleResetErrors,
    formValues,
  };
};

export default useForm;

import { useReducer } from 'react';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
  toggleConsent: 'TOGGLE CONSENT',
  throwError: 'THROW ERROR',
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
      return { ...state, error: action.errorValue };
    default:
      return state;
  }
};

const useForm = (initialValues) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);

  const handleInputChange = (e) => {
    dispatch({ type: actionTypes.inputChange, name: e.target.name, value: e.target.value });
  };
  const handleClearForm = () => {
    dispatch({ type: actionTypes.clearValues, initialValues });
  };
  const handleThrowError = (errorMessage) => {
    dispatch({ type: actionTypes.throwError, errorValue: errorMessage });
  };
  const handleToggleConsent = () => {
    dispatch({ type: actionTypes.toggleConsent });
  };
  return {
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleToggleConsent,
    formValues,
  };
};

export default useForm;
